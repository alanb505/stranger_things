export const isLogIn = () => {
    return !! window.localStorage.getItem("token")
}

export const makeHeaders= (method, body)=>{
    return {
            method,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${window.localStorage.getItem(
                "token"
              )}`
            },

            body: body ? JSON.stringify(body): undefined
    }
}