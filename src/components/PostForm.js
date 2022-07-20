import { makeHeaders } from "./fetch"
import { useNavigate } from "react-router-dom";

const PostForm = (props) => {
    const posts = props.posts
    const setPosts = props.setPosts
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault()
        const fData = new FormData(e.target)

        const params = {
            title: fData.get("title"),
            price: fData.get("price"),
            location: fData.get("location"),
            description: fData.get("description"),
            willDeliver: !!fData.get("willDeliver")

        }
        fetch ("https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt/posts", makeHeaders("post", {post: params}))
        .then(
            response => response.json()
        )
        .then(({data}) => {
            const newPosts = [...posts, data.post] 
            setPosts(newPosts)
            navigate(
                "/posts"
            )
        })
        .catch(console.error)
    }
    return <div className="submitForm">
        <form onSubmit = {onSubmit}>
            <input type= "text" required min={1} name = "title" placeholder="title"></input>
            <input type= "text" required min={1} name = "price" placeholder="price" ></input>
            <input type= "text" name = "location" placeholder="location"></input>
            <br></br>
            <textarea name="description" required></textarea>
            <input type = "checkbox" name="willDeliver"></input>
            <button>Submit</button>
        </form>
    </div>;
}

export default PostForm