import { CDN_URL } from "../utils/constants";
const ItemList = ({items})=>{
    return(
        <>
            {
                items&&items.map((item)=>
                        <div key={item.card.info.id}
                        className="p-2 m-2 border-b border-black
                        text-left flex">
                            <div className="w-9/12">
                                <div className="py-2">
                                    <span className="">{item.card.info.name}</span>
                                    <span>{" - Rs. "}{item.card.info.price/100}</span>
                                </div>
                                <div>
                                    <p>{item.card.info.description}</p>
                                </div>
                            </div>
                            <div className="w-3/12">
                                <div className="absolute mt-14 ml-24">
                                    <button className="px-1.5 py-1 bg-white shadow-lg
                                    text-sm">Add +</button>
                                </div>
                                <img src={CDN_URL+item.card.info.imageId} alt="image"/>
                            </div>
                        </div>
                )
            }
        </>
    )
}
export default ItemList;