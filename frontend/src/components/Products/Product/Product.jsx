import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
    const navigate = useNavigate();

  const imageUrl = data?.imageUrls?.[0];

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img src={imageUrl} alt={data?.title || "Product"} />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
