import Comment from "./Comment"
import {isLogIn, makeHeaders} from "./fetch"
const PostCard = ({title, author, description, location, price, willDeliver, active, isAuthor, createdAt, updatedAt, posts, setPosts, _id}) => {
    const onClick = () =>{
        fetch ("https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt/posts/" +_id, makeHeaders("delete"))
        .then(()=>{
             const newPost = [...posts].filter(
            (post) => post._id != _id
            
            )
            console.log(newPost, _id, posts);
            setPosts(
                newPost
            )
        })
       
    }
    
    return <div className="des post-single">
       <div className="card-content">
        <div>{title}</div>
        {/* <div>{author}</div> */}
        <div>{description}</div>
        <div>{location}</div>
        <div>{price}</div>
        <div>{willDeliver}</div>
        <div>{active}</div>
        <div>{createdAt}</div>
        <div>{updatedAt}</div>
        </div>
        {isAuthor && <div><button onClick={onClick}>Delete</button></div>}
       { !isAuthor && isLogIn() && <Comment _id ={_id} />}
    </div>
}
export default PostCard;