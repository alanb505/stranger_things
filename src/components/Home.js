import { isLogIn } from "./fetch"
import PostForm from "./PostForm"


const Home = (props) => {
    const loggedIn = isLogIn()
    return (
        <div>
           {loggedIn && <PostForm posts={props.posts} setPosts ={props.setPosts}  />}
    
        </div>
    )
}
export default Home