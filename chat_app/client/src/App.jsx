import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import Auth from "./pages/Auth.jsx";
import Error from "./components/Error.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Socketcontext } from "./context/SocketContext";
function App() {
  // socket context
  const [currentFriendId, setCurrentFriendId] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState([]);
  const [socket,setSocket]= useState(null)
  return (
    <>
     <ToastContainer theme='dark'></ToastContainer>
     <Socketcontext.Provider value={{socket,setSocket,unreadMessages,setUnreadMessages,currentFriendId,setCurrentFriendId}}>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />}/>
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Error />} /> 
            </Routes>
        </BrowserRouter>
      </Socketcontext.Provider> 
    </>
  )
}
export default App