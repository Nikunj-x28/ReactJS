import johncena from "../assets/johncena.jpeg"
const User = ()=>{
    return(
        <div className="shadow-md flex-col h-18 hover:bg-gray-200 transition duration-300 ease-in-out transform">
            <div className="flex items-center p-2">
                <img src={johncena} alt="profile pic" className="w-8 h-8 rounded"/>
                <p className="px-4">Name</p>
            </div>
            <p className="pl-4">Latest Message</p>
        </div>
    )
}
export default User