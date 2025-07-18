import { useContext, useEffect } from "react";
import {Context} from "../../services/context"
import { getCategories, getProducts } from "../../services/api";
import './Home.scss'
import Banner from "./Banner/Banner";
import Category from "./Category/Category"
import Products from "../Products/Products";

const Home = () => {
    const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allProducts = await getProducts();
        setProducts(allProducts);

        const allCategories = await getCategories();
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    }, []);


    return (
      <div>
        <Banner />
        <div className="main-content">
          <div className="layout">
            <Category categories={categories} />
            <Products products={products} headingText="Featured Products" />
          </div>
        </div>
      </div>
    );


}

export default Home;