const SearchBar = ()=>{
    return(
        <div className="relative">
            <input 
                type="text" 
                placeholder="Find a user" 
                className="w-full py-2 px-4 text-gray-700 placeholder-gray-400 bg-purple-200  focus:outline-none focus:ring"
            />
        </div>
    )
}
export default SearchBar