import  { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);
  
  const getProductsByCategory = (category) => {
      return products.filter(p => p.category === category).slice(0, 4);
  }

  return (
    <div>
      <section>
        <h2>Featured Electronics</h2>
        <div className="product-grid">
          {getProductsByCategory('Electronics').map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={() => {}} />
          ))}
        </div>
      </section>
      <section style={{marginTop: '40px'}}>
        <h2>Latest Books</h2>
        <div className="product-grid">
          {getProductsByCategory('Books').map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={() => {}} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
