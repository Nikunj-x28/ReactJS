import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartslice";
const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const handleClear = ()=>{
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-3">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 bg-slate-500 text-white rounded-md
            mt-2"
            onClick={handleClear}>
            Clear cart</button>
            <div>
                <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}
export default Cart;