import { useState, useEffect } from 'react'
import { useResource } from "react-request-hook";

export default function Register({dispatchUser}) {

    const [ username, setUsername ] = useState('')

    const [ password, setPassword ] = useState('')

    const [ passwordRepeat, setPasswordRepeat ] = useState('')

    const [user, register] = useResource((username, password) => ({
        url: "/users",
        method: "post",
        data: { email: username, password },
      }));
    
      useEffect(() => {
        if (user && user.data) {
          dispatchUser({ type: "REGISTER", username: user.data.user.email });
        }
      }, [user, dispatchUser]);
      
    function handleUsername (evt) { setUsername(evt.target.value) }
    function handlePassword (evt) { setPassword(evt.target.value) }
    function handlePasswordRepeat (evt) { setPasswordRepeat(evt.target.value) }

    return (
        <form onSubmit={e => { e.preventDefault(); register(username, password); dispatchUser({type: 'REGISTER', username}) }}>
            <label htmlFor="register-username">Username:</label>
            <input type="text" name="register-username" id="register-username" onChange={handleUsername} value={username}/>
            <label htmlFor="register-password">Password:</label>
            <input type="password" name="register-password" id="register-password" value={password} onChange={handlePassword} />
            <label htmlFor="register-password-repeat">Repeat password:</label>
            <input type="password" name="register-password-repeat" id="register-password-repeat" value={passwordRepeat} onChange={handlePasswordRepeat} />
            <input type="submit" value="Register" disabled={username.length === 0 || password.length === 0 || password !== passwordRepeat} />
        </form>
    )
}
