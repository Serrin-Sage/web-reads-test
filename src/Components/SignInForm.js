import { useState } from "react";
// import Validation from "./Validation";
import { Link } from "react-router-dom";
import axios from "axios"

function SignInForm() {

    // const [values, setValues] = useState({
    //     email:"",
    //     password:""
    // });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({});

   
    

    // const handleChange = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // setErrors(Validation(email));
        // setErrors(Validation(password));
        console.log(email, password);
        try {
            const config = {
                headers:{
                    "Content-type" : "application/json"
                }
            }
            const { data } = await axios.post(
                "/api/users/signin",
                {
                    email,
                    password,
                },
                config
            );
            console.log({data});
            localStorage.setItem("userInfo", JSON.stringify(data));
            window.location.href = '/userpage';
            
        } catch (error) {
             setErrors(error.response.data.message);
            
        }
    };

  
    
    return (
        <div className="formcontainer">
            <div className="app-wrapper">
                <div>
                    <h2>Sign In</h2>
                </div>
                <form  className="form-wrapper">
                    <div className="form-field">
                        <label>Email</label>
                        <br></br>
                        <input 
                            className="input" 
                            type="text" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-field">
                        <label>Password</label>
                        <br></br>
                        <input 
                            className="input" 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign In</button>
                    </div>
                </form>
                <p className="bottom-text">Don't have an account? Sign up <Link to='/signup' >
                here!</Link>
                </p>
            </div>
            
        </div>
    )
}

export default SignInForm