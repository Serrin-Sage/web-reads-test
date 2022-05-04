import { useState } from "react";
import Validation from "./Validation";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUpForm() {

    // const [values, setValues] = useState({
    //     fullname:"",
    //     email:"",
    //     password:"",
    //     confirmpassword: "",
    // });
    //usestates for all the fields 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [errormessage, setErrormessage] = useState("");

    //error 
    
    const [errors, setErrors] = useState({});

    // const handleChange = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // setErrors(Validation(values));
        //console.log(values.fullname);

        //check if the password is same with the confirmed password
        if(password !== confirmpassword){
            setErrormessage("Passwords do NOT match");
        }
        else{
            setErrormessage("");
            try {
                const config = {
                    headers:{
                        "Content-type" : "application/json"
                    }
                }

                const { data } = await axios.post(
                    "/api/users/signup",
                    {
                        name,
                        email,
                        password
                    },
                    config
                );
                console.log(data);
                localStorage.setItem("userInfo", JSON.stringify(data));
                
            } catch (error) {
                setErrors(error.response.data.message);
            }
        }


    };
    
    return (
        <div className="formcontainer">
            <div className="app-wrapper">
                <div>
                    <h2>Create Account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="form-field">
                        <label>Name</label>
                        <br></br>
                        <input 
                            className="input" 
                            type="text" 
                            name="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        {errors.fullname && <p className="error">{errors.fullname}</p>}
                    </div>
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
                    <div className="form-field">
                        <label>Re-enter Password</label>
                        <br></br>
                        <input 
                            className="input" 
                            type="password" 
                            name="confirmpassword" 
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Sign up</button>
                    </div>
                    {errormessage}
                </form>
                <div>
                <p className="bottom-text">Already have an account? Sign in <Link to='/signin' >
                here!</Link>
                </p>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm