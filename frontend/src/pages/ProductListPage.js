import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await getProducts();
        const filteredProducts = category 
          ? allProducts.filter(p => p.category && p.category.toLowerCase() === category.toLowerCase())
          : allProducts;
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div>
      <h1>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
