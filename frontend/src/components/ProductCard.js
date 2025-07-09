import { addToCart } from '../services/api';

const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = async () => {
    try {
      await addToCart(product.id, 1);
      alert(`${product.name} added to cart!`);
      onAddToCart();
    } catch (error) {
      console.error("Failed to add to cart", error);
      alert("Could not add to cart.");
    }
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl || 'https://via.placeholder.com/300'} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

