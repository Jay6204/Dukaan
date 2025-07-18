import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategoriesById, getProductById } from "../../services/api"; // ✅ IMPORTED HERE
import Products from "../Products/Products";
import "./Category.scss";

const Category = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [productDataList, setProductDataList] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategoriesById(id);
        setCategoryData(data);
      } catch (error) {
        console.error("Failed to fetch category:", error);
      }
    };

    fetchCategory();
  }, [id]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        if (!categoryData || !categoryData.productIds?.length) return;

        const results = await Promise.all(
          categoryData.productIds.map((pid) => getProductById(pid))
          );
          console.log("Product Data from Category:", results);
        setProductDataList(results);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    fetchAllProducts();
  }, [categoryData]); // ✅ Depend on `categoryData`, not `products`

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {categoryData?.title || "Loading..."}
        </div>
        <Products innerPage={true} products={productDataList} />
      </div>
    </div>
  );
};

export default Category;