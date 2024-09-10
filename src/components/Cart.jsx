import ItemList from "./ItemList";
// How will read the cart from the store.
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="col-sm-8 m-auto">
        <button
          className="p-2 m-2 rounded-lg btn btn-dark"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {/* {cartItems.length === 0 ?
          <h5> Cart is empty. Add item to the cart!</h5>
        :  <ItemList items={cartItems} /> } */}

        {cartItems.length === 0 && (
          <h5> Cart is empty. Add item to the cart </h5>)}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
