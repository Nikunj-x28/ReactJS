const Filter = ({restaurants,setFilteredRestaurants})=>{
        let searchText=""
        return(
            <div className="filter flex">
                <div className="m-4 p-4 ">
                    <input type="text" className="border border-solid border-black"
                    onChange={(e)=> {
                        searchText=e.target.value;
                    }}
                    />
                    <button
                    className="px-4 py-0.5 bg-green-200 m-2 rounded-lg"
                    onClick={()=>{
                        const updatedFilteredRestaurants = restaurants.filter((res) =>
                                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(updatedFilteredRestaurants);
                    }}
                    >Search</button>
                </div>
                <div className="flex items-center">
                <button className="px-4 py-0.5 bg-gray-200 m-2 rounded-lg"
                onClick={()=>{
                    setFilteredRestaurants(restaurants);
                }}
                >
                  All
                </button>
                </div>
                <div className="flex items-center">
                <button className="px-4 py-0.5 bg-gray-100 m-2 rounded-lg"
                  onClick={()=>{
                      const filteredList = restaurants.filter((restaurant)=>{
                        return restaurant.info.avgRating >= 4.2;
                      })
                      setFilteredRestaurants(filteredList);
                  }}
                >
                  Top Rated Restaurants
                </button>
                </div>
            </div>
        )
}
export default Filter;