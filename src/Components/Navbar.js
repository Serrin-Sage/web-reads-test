import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="button-container">
           <div className="sign-btn">
                <Link to="/signin" className="signinbtn">
                    Sign in</Link>
           </div>
           <div className="sign-btn">
                <Link to="/signup" className="signupbtn">
                    Sign Up</Link>
           </div>
        </div>
    )
}

export default Navbar