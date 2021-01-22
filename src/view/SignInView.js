import React, { useState, useContext } from 'react'
import { UserContext } from '../shared/global/provider/UserProvider'

export const SignInView = () => {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

    const login = () => {
        setAuthenticatedUser(userName)
         
    }

    return (

        <div>
            <span>User name: </span> <input onChange={event => setUserName(event.target.value)} /><br />
            <span>Password: </span> <input type="password" onChange={event => setPassword(event.target.value)} /><br />
            <button onClick={() => login()}>Login</button>

        </div>


    )

}