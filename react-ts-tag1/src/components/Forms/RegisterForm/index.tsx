import { useRef } from "react"
import { useLocalStorage } from "@/hooks/useLocalStorage";

const RegisterForm = () => {

    const store = useLocalStorage("user_data_value", {})
    console.log("store", store)

    const firstnameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);


    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault()
        const userDataSet = {
            firstname: firstnameRef.current ? firstnameRef.current.value : "",
            //firstname: firstnameRef.current && firstnameRef.current.value
            lastname: lastnameRef.current ? lastnameRef.current.value : "",
            email: emailRef.current ? emailRef.current.value : "",


        }

        console.log("registered user", userDataSet)
        store.setStoredValue(userDataSet)
    }

    return (
        <div>
            <h3>Register</h3>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">Firstname</label><br />
                <input id="firstname" name="firstname" ref={firstnameRef} /><br />
                <label htmlFor="lastname">Lastname</label><br />
                <input id="lastname" name="lastname" ref={lastnameRef} /><br />
                <label htmlFor="email">Email</label><br />
                <input id="email" name="email" ref={emailRef} /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm
