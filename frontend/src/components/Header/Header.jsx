import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../services/context";
import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi"; // icons for menu
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import "./Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, user, setUser } = useContext(Context);
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 200);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // close menu after navigation
  };

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <div
            className="mobile-menu-icon"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        
          <ul className={`left ${menuOpen ? "open" : ""}`}>
            <li onClick={() => handleNavigate("/")}>Home</li>
            {!user ? (<><li onClick={() => handleNavigate("/users/signup")}>SignUp</li>
              <li onClick={() => handleNavigate("/users/login")}>Login</li></>) : (<>
                <li style={{fontWeight:"bold", color:"#8e2de2"}}>
                  Hi, {user.userName}!
                </li>
                <li onClick={() => {
                  localStorage.removeItem("token");
                  setUser(null);
                  navigate("/users/login");
                }}>
                  Logout
                </li>
              </>)}
            
            <li onClick={() => handleNavigate("/categories")}>Categories</li>
          </ul>

          <div className="center" onClick={() => navigate("/")}>
            General Store
          </div>

          <div className="right">
            <TbSearch onClick={() => setShowSearch(true)} />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <CgShoppingCart />
              {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>

      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
