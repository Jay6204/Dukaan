import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubtotal] = useState(0);
    const [user, setUser] = useState(null);
    const location = useLocation();

    useEffect(() => { 
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => { 
        window.scrollTo(0, 0);
    }, [location]); 
    
    useEffect(() => {
        let count = 0;
        cartItems.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subtotal = 0;
        cartItems.map((item) => (subtotal += item.attributes.price * item.attributes.quantity));
        setCartSubtotal(subtotal);
    }, [cartItems]);

    const handleAddToCart = (product, quantity) => {
        let items = [...cartItems];
        const index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            items[index].attributes.quantity += quantity;
        } else {
            product.attributes.quantity = quantity;
            items = [...items, product];
        }
        setCartItems(items);
    };

    const handleRemoveFromCart = (product) => { 
        let items = [...cartItems];
        items = items.filter((item) => item.id !== product.id);
        setCartItems(items);
    }

    const handleCartProductQuantity = (type, product) => { 
        let items = [...cartItems];
        const index = items.findIndex((p) => p.id === product.id);
        if (index !== -1) {
            if (type === "inc") {
                items[index].attributes.quantity += 1;
            } else if (type === "dec" && items[index].attributes.quantity > 1) {
                items[index].attributes.quantity -= 1;
            }
        }
        setCartItems(items);
    }

  return (
      <Context.Provider
          value={{
              categories,
              setCategories,
              products,
              setProducts,
              cartItems,
              setCartItems,
              cartCount,
              setCartCount,
              cartSubTotal,
              setCartSubtotal,
              handleAddToCart,
              handleRemoveFromCart,
              handleCartProductQuantity,
              user, 
              setUser
          }}
      >
      {children}
    </Context.Provider>
  );
}

export default AppContext;