import UserContext from "../context/UserContext"
import { useContext } from "react"
const NavBar = ()=>{
    const {userData} = useContext(UserContext)
    // console.log(userData)
    return(
        <div className="px-1 flex justify-between items-center text-sm rounded-tl-md bg-purple-700 text-white h-[10%]">
            <div className="font-bold">Hello Chat</div>
            <div className="flex items-center gap-1">
                <p>{userData?.data?.User?.fullName}</p>
                <button className="shadow-lg px-2 py-1 bg-blue-300">Logout</button>
            </div>
        </div>
    )
}
export default NavBar