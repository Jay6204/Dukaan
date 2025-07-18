import { useEffect, useState } from "react";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api";
import { FaCartPlus, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "../../services/context";


const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const [productData, setProductData] = useState(null);
    const { handleAddToCart } = useContext(Context);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProductData(data);
            } catch (error) {
                console.error("Failed to fetch product:", error);
            }
        };

        fetchProduct();
    }, [id]);

    const decrement = () => {
        setQuantity(prev => {
            if (prev == 1) return 1;
            return prev - 1;
        });
    };

    const increment = () => {
        setQuantity(prev => prev + 1);
    };

    if(!productData) {
        return;
    }

    return (
      <div className="single-product-main-content">
        <div className="layout">
          <div className="single-product-page">
            <div className="left">
              <img src={productData.imgUrls} alt={productData.title} />
            </div>
            <div className="right">
              <span className="name">{product.title}</span>
              <span className="price">&#8377;{product.price}</span>
              <span className="desc">{product.desc}</span>
              <div className="cart-buttons">
                <div className="quantity-buttons">
                  <span onClick={decrement}>-</span>
                  <span>{quantity}</span>
                  <span onClick={increment}>+</span>
                </div>
                <button
                  className="add-to-cart-button"
                  onClick={() => {
                    handleAddToCart(productData, quantity);
                    setQuantity(1);
                  }}
                >
                  <FaCartPlus size={20} />
                  ADD TO CART
                </button>
              </div>
              <span className="divider" />
              <div className="info-item">
                <span className="text-bold">
                  Category: <span>{product.categories.title}</span>
                </span>
                <span className="text-bold">
                  Share:
                  <span className="social-icons">
                    <FaFacebookF size={16} />
                    <FaTwitter size={16} />
                    <FaInstagram size={16} />
                    <FaLinkedinIn size={16} />
                    <FaPinterest size={16} />
                  </span>
                </span>
              </div>
            </div>
                </div>
                {/* <RelatedProduct productId={id} categoryId={productData.categories.id} /> */}
        </div>
      </div>
    );
}

export default SingleProduct;