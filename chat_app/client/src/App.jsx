import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx";
import Error from "./components/Error.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "./context/UserContext.js";
function App() {
  const Homepage = ()=>{
    return(
      <div className="bg-gray-400 flex justify-center items-center
      h-screen">
            <div className="bg-white text-center w-60 h-44 px-4 py-2 flex justify-between items-center
            rounded-lg"> 
            <Link  to="./signup" className="p-2 bg-blue-300 rounded-md h-fit mx-2">
                <button> Signup </button>
            </Link>
            <Link  to="./login" className="p-2 bg-blue-300 rounded-md h-fit mx-2">
                <button> Login </button>
            </Link>
            </div>
        </div>
    );
  }
  const [userData,setUserData] = useState();
  return (
    <>
      <UserContext.Provider value={{userData,setUserData}}>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} case />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Error />} /> 
            </Routes>
        </BrowserRouter> 
      </UserContext.Provider>
    </>
  )
}

export default App