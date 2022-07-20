import { useState } from "react"
const LoginForm = ((props)=>{
    const [error, setError] = useState()
    const isLogIn = props.isLogIn
   const setToken = props.setToken
    const onSubmit = ((e)=>{
        const fData= new FormData(
            e.target
        )
        e.preventDefault(

        )
        const userName = fData.get("username")
        const password = fData.get("password")
        const confirmPassword = fData.get("confirmPassword")
            fetch (`https://strangers-things.herokuapp.com/api/2204-ftb-mt-web-pt/users/${isLogIn ? "login": "register" }`,
            {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: userName,
                    password
                  }
                })
            }
            )
            .then(response => response.json())
            .then((data) => {
                if (data.success) {
                    
               
                const token = data.data.token
                window.localStorage.setItem("token", token)
                setToken(token)
                window.location = "/"
            }
            else {
                setError(data.error.message)
            }
         })
            .catch(console.error)
    })
    return <div>
        <form onSubmit={onSubmit}>
            <div className="formGroup">
                <label>Username</label>
            <input type= "text" name= "username" required min={3} placeholder="Username"></input>
            </div>
            <div className="formGroup">
                <label>password</label>
            <input type="password" name= "password" required min={6} placeholder = " Password"></input>
            </div>
            <div className="formGroup">
                <label>confirm password</label>
            {!isLogIn && <input type="password" name ="confirmPassword" required placeholder="Confirm Password"></input>}
            </div>
            <div className="form-button">
             <button>Submit</button>
           
            </div>

        </form>
         <p>{error}</p>
    </div>
})

export default LoginForm;