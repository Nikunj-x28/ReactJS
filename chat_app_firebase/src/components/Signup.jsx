import { Link } from "react-router-dom";
import Add from "../assets/default_profile.png"
const Signup = ()=>{
    return(
        <div className="bg-blue-400 flex justify-center items-center h-screen">
                <div className="bg-white text-center p-4 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Hello Chat</h1>
                    <div className="mb-4">Register </div>
                    <div className="mb-4">
                        <input type="text" placeholder="display name" className="w-full py-2 px-4 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Email" className="w-full py-2 px-4 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" className="w-full py-2 px-4 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fileInput" 
                            className="flex justify-center border border-gray-300 rounded p-4 hover:border-blue-500
                            cursor-pointer">
                            <img src={Add} alt="default profile" className="mr-8 w-8 h-8"/>
                            <span className="text-gray-400">Upload Image</span>
                        </label>
                        <input type="file" id="fileInput" className="hidden" accept=".jpg, .jpeg, .png"/>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-700 transition duration-300">
                        Sign Up
                    </button>
                    <p className="text-sm">Already have an account? <Link to=".././Login" className="text-blue-600 cursor-pointer">Login</Link></p>
                </div>
        </div>
    ) 
}
export default Signup