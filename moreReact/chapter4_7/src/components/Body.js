import RestaurantCard from "./RestaurantCard";
// Now we dont need the mock data
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constants";

const Body =()=>{
// useState is used to create a state variable
// State Variable is local to that component

    // following is also a valid syntax
    // const arr = useState(resList);
    // const [restaurants,setRestaurants] = arr;
    
    const [restaurants,setRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    // const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        // runs after the body is rendered
        fetchData();
    },[])
    const fetchData=async ()=>{
        const response = await fetch(
            RES_URL
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
        console.log(typeof(filteredRestaurants))
    }
    console.log(typeof(filteredRestaurants))
    return (filteredRestaurants.length === 0)?<>
         <Filter restaurants={restaurants}
            setFilteredRestaurants={setFilteredRestaurants}/>
        <Shimmer/>
    </>
    :(
        <div className="body">
            <Filter restaurants={restaurants}
            setFilteredRestaurants={setFilteredRestaurants}/>
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant)=>{
                        return(
                        <Link 
                        // key should be on the parent JSX
                        key={restaurant.info.id}
                        to={"./restaurant/"+restaurant.info.id}
                        className="link-reset">
                            <RestaurantCard 
                            resData={restaurant}
                            />
                        </Link>
                        );
                    })
                }
            </div>
        </div>
    )
}
export default Body;