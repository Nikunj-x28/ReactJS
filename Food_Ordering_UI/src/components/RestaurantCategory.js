import ItemList from "./ItemList"
const RestaurantCategory = ({showItems,setShowItems,data})=>{
        console.log(data)
        const handleClick = ()=>{
            if(showItems === data.title){
                setShowItems(null)
            }
            else setShowItems(data.title);
        }
        return (
            <div className="w-6/12 mx-auto my-3 p-4 bg-gray-100 shadow-lg flex flex-col justify-between">
                {/* header */}
                <div className="flex justify-between border-b border-blue-300 rounded-lg
                p-2 cursor-pointer shadow-lg"
                onClick={handleClick}>
                    <span className="font-medium">{data.title} ({data.itemCards.length})</span>
                    {
                    showItems
                    ?<span >🔽</span>
                    :<span >▶️</span>
                    }
                </div>
                {/* Item values */}
                {
                    (showItems && showItems === data.title)
                    &&<div> <ItemList items={data.itemCards}/></div>
                }
            </div>
        )
}
export default RestaurantCategory