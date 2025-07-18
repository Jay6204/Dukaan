import { getProductById } from "../../services/api";
import Product from "./Product/Product";
import "./Products.scss";

const Products = ({ products, innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.map((item) => (
          <Product key={item.id} id={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
