import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
const StupidAPI = ({resInfo,one,two})=>{
    const { name,cuisines,costForTwoMessage } = resInfo?.data?.cards[one]?.card?.card?.info;
    const [showItems,setShowItems] = useState(null);
    const categories = resInfo?.data?.cards[two]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        // cannot directly write @type
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log(categories)
    return(
        <div className="text-center">
            <h1 className="text-xl font-bold">{name}</h1>
            <h2 className="text-gray-600">{cuisines.join(", ")}</h2>
            <h2 className="text-gray-600">{costForTwoMessage}</h2>
            <h2 className="text-lg font-bold">Menu</h2>
            {/* categories accordion */}
            {
             categories&&categories.map((category)=>
                        <RestaurantCategory
                        key={category?.card?.card?.title} 
                        showItems={showItems}
                        setShowItems={setShowItems}
                        data ={category?.card?.card}/>
             )
            }
        </div>
    )    
}
export default StupidAPI;

