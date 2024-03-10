import RestaurantCard from "./RestaurantCard";
// Now we dont need the mock data
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState , useEffect } from "react";

const Body =()=>{
// useState is used to create a state variable
// State Variable is local to that component

    // following is also a valid syntax
    // const arr = useState(resList);
    // const [restaurants,setRestaurants] = arr;
    
    const [restaurants,setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    // const [searchText,setSearchText] = useState("");
    let searchText;
    useEffect(()=>{
        // runs after the body is rendered
        fetchData();
    },[restaurants])
    const fetchData=async ()=>{
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const resJson = await response.json();
        setRestaurants(
            // optional chaining
            resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurants(
            // optional chaining
            resJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }

    return (filteredRestaurants.length === 0)?<Shimmer/>
    :(
        <div className="body">
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
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant)=>{
                        return(
                        <RestaurantCard
                           key={restaurant.info.id} 
                           resData={restaurant}
                        />
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Body;