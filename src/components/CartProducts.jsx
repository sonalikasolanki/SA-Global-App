import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/reducer/handleCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartProducts(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { id, title, price, category, description, image } = props.data;
  const product = cart.cartItems.filter((eachProduct) => eachProduct.id === id);

  const handleQtyDecrement = () => {
    dispatch(removeFromCart(props.data));
    // If the last quantity is going to be removed
    if (product[0].itemQuantity === 1) {
      alert(title + " removed from the cart");
    }
  };

  const handleQtyIncrement = () => {
    dispatch(addToCart(props.data));
  };

  return (
    <>
      <div className="px-4 my-3 rounded-2 py-3" style={{ background: "#50616a", color: "white" }}>
        <div className="d-flex flex-column-reverse flex-lg-row justify-content-between align-items-stretch align-items-lg-start">
          <div className="d-flex flex-column justify-content-between px-3 pb-lg-0" style={{ maxWidth: "50%" }}>
            <div>
              <h1>{title}</h1>
              <small>Category: <span className="text-uppercase">{category}</span></small>
              <p className="text-justify">{description}</p>
            </div>
            <div className="quantity-container" style={{ width: "120px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <button className="btn btn-dark" onClick={handleQtyDecrement}>
                <AiOutlineMinus />
              </button>
              <div className="quantity-value">{product[0].itemQuantity}</div>
              <button className="btn btn-dark" onClick={handleQtyIncrement}>
                <AiOutlinePlus />
              </button>
            </div>
            <div>
              <h4 className="display-6 fw-bold my-4">Price: ${price}</h4>
            </div>
          </div>
          <div className="bg-dark" style={{ width: "100%", height: "300px" }}>
            <img src={image} alt={title} className="w-100 h-100" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProducts;

