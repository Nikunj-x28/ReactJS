import { Link } from "react-router-dom";
const Login = ()=>{
    return(
        <div className="bg-blue-400 flex justify-center items-center h-screen">
                <div className="bg-white text-center p-4 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Hello Chat</h1>
                    <div className="mb-4">Login </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Email" className="w-full py-2 px-4 border rounded-lg" />
                    </div>
                    <div className="mb-4">
                        <input type="password" placeholder="Password" className="w-full py-2 px-4 border rounded-lg" />
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-700 transition duration-300">
                        Sign In
                    </button>
                    <p className="text-sm">Don't have an account? <Link to=".././Signup" className="text-blue-600 cursor-pointer">Signup</Link></p>
                </div>
        </div>
    )
}
export default Login;