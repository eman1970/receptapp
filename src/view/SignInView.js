import React, { useState } from 'react'

export const SignInView = () => {

    const [loggedInUser, setLoggedInUser] = useState()
    const [password, setPassword] = useState()

    return (

        <div>
            <span>User name: </span><input onChange={event => setLoggedInUser(event.target.value)} /><br />
            <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)} /><br />
            <button>Login</button>
        </div>


    )

}