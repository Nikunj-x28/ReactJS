import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ()=>{
    const [btnName,setBtnName] = useState("Login")
    return(
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="links"><Link to="./">Home</Link></li>
                    <li className="links"><Link to="./about">About Us</Link></li>
                    <li className="links"><Link to="./contact">Contact Us</Link></li>
                    <li className="links">Cart</li>
                    <button
                    className="login-btn"
                    onClick={()=>{
                        btnName === "Login"?
                        setBtnName("Logout"):
                        setBtnName("Login")
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;