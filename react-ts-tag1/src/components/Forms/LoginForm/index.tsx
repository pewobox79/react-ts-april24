import { useState } from "react"

const LoginForm = () => {

    const INIT_VALUES = {
        username: "",
        password: ""
    }

    const [loginData, setLoginData] = useState(INIT_VALUES)


    function handleChange(event: { target: { name: string, value: string } }) {

        setLoginData({ ...loginData, [event.target.name]: event.target.value })
        console.log("event values", event.target.name, event.target.value)

    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault()
        console.log("login data", loginData)
        setLoginData(INIT_VALUES)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor={"username"}>Username</label><br />
            <input id="username" type="text" name="username" value={loginData.username} onChange={handleChange} /><br />
            <label htmlFor={"password"}>password</label><br />
            <input id="password" type="text" name="password" value={loginData.password} onChange={handleChange} /><br />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm
