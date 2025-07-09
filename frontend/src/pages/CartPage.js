import "../styles/Cart.scss";
import { useEffect, useState } from "react";
import { getCart, removeFromCart, clearCart } from "../services/api";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

const CartPage = ({ setShowCart }) => {
  const [cart, setCart] = useState(null);

  const fetchCart = async () => {
    try {
      const cartData = await getCart();
      setCart(cartData);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      const updatedCart = await removeFromCart(productId);
      setCart(updatedCart);
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  const handleCheckout = async () => {
    try {
      await clearCart();
      setCart(null);
      alert("Thank you for your order! Your payment was successful.");
    } catch (error) {
      console.error("Failed to clear cart", error);
      alert("There was an issue processing your order.");
    }
  };

  const cartItems =
    cart?.items && typeof cart.items === "object"
      ? Object.values(cart.items)
      : [];

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems.length ? (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={() => setShowCart(false)}>
              RETURN TO SHOP
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.product.id}>
                  <img
                    src={
                      item.product.imageUrl || "https://via.placeholder.com/100"
                    }
                    alt={item.product.name}
                    width="100"
                  />
                  <div className="cart-item-info">
                    <h3>{item.product.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{item.product.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => handleRemove(item.product.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">
                  ₹{cart.totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
