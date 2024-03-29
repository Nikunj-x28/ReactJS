const NavBar = ()=>{
    return(
        <div className="px-1 flex justify-between items-center text-sm rounded-tl-md bg-purple-700 text-white h-[10%]">
            <div className="font-bold">Hello Chat</div>
            <div className="flex items-center gap-1">
                {/* className="h-8 w-8 object-cover" */}
                <img src="" alt="profile pic" />
                <p>Name</p>
                <button className="shadow-lg px-2 py-1 bg-blue-300">Logout</button>
            </div>
        </div>
    )
}
export default NavBar