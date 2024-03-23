import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStattus from "../utils/useOnlineStatus";
const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");
    const isOnline = useOnlineStattus();
    return(
        <div className="flex justify-between shadow-md mb-2">
            <div>
                <img className="w-36" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status: {isOnline ? "✅" : "🔴"}
                    </li>
                    <li className="px-4 "><Link to="./">Home</Link></li>
                    <li className="px-4 "><Link to="./about">About Us</Link></li>
                    <li className="px-4 "><Link to="./contact">Contact Us</Link></li>
                    <li className="px-4 ">Cart</li>
                    <button
                    className={"login-btn border-1 px-2 py-0.5 rounded-md " + 
                    (btnName === "Login"
                    ?"bg-gray-300"
                    :"bg-green-300")
                    }
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