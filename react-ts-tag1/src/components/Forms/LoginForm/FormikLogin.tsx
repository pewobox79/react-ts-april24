import { useFormik } from "formik";
const FormikLogin = () => {

    const INIT_VALUES = {
        username: "",
        password: ""
    }
    const formik = useFormik({
        initialValues: INIT_VALUES,
        validateOnChange: false,
        validate: (values) => {
            console.log("values validated", values)
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });
    return (
        <>
            <h2>formik example</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor={"username"}>Username</label><br />
                <input id="username" type="text" name="username" value={formik.values.username} onChange={formik.handleChange} /><br />
                <label htmlFor={"password"}>password</label><br />
                <input id="password" type="text" name="password" value={formik.values.password} onChange={formik.handleChange} /><br />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default FormikLogin
