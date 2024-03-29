import Chat from "./Chat";
import SideBar from "./SideBar";
const Home = ()=>{
    return(
        <div className="bg-purple-200 flex justify-center items-center h-screen">
            <div className="bg-purple-400 rounded-md h-[80%] w-4/6 flex">
                <SideBar/>
                <Chat/>
            </div>
        </div>
    )
}
export default Home;