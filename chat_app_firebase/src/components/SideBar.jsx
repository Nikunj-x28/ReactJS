import ChatMenu from "./ChatMenu";
import SearchBar from "./SearchBar";
import NavBar from "./Navbar";
const SideBar = ()=>{
    return(
        <div className="w-4/12 rounded-tl-md rounded-bl-md2 bg-white">
            <NavBar/>
            <SearchBar/>
            <ChatMenu/>
        </div>
    )
}
export default SideBar;