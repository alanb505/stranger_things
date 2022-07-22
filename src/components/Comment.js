import { makeHeaders } from "./fetch";

const Comment = (props)=> {
    const onSubmit = (event) =>{
        event.preventDefault()
        const fData = new FormData(event.target)
        const params = {
            message: {content: fData.get("message")}
        }
        fetch ("https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt/posts/" + props._id + "/messages", makeHeaders("post", params))
        .then(response => response.json(

        ))
        .then(({data})=>{
            console.log(data);
        })
       
    }
    return (
    <form onSubmit={onSubmit}>
        <input required name="message" type= "text" ></input>
        <button className="commentB">comment</button>
    </form>
    )
}

export  default Comment