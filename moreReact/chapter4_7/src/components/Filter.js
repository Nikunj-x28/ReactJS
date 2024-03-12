const Filter = ({restaurants,setFilteredRestaurants})=>{
        let searchText=""
        return(
            <div className="filter">
                <div className="Search">
                    <input type="text" className="search-box"
                    // value={searchText}
                    onChange={(e)=> {
                        // setSearchText(e.target.value)
                        searchText=e.target.value;
                    }}
                    />
                    <button
                    onClick={()=>{
                        const updatedFilteredRestaurants = restaurants.filter((res) =>
                                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(updatedFilteredRestaurants);
                    }}
                    >Search</button>
                </div>

                <button className="back-to-home"
                onClick={()=>{
                    setFilteredRestaurants(restaurants);
                }}
                >
                  All
                </button>

                <button className="filter-btn"
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
        )
}
export default Filter;