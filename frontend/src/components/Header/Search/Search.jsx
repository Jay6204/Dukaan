import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../../services/api";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }
    const fetchAndFilter = async () => {
      try {
        const allProducts = await getProducts();
        const filtered = allProducts.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            (p.description &&
              p.description.toLowerCase().includes(query.toLowerCase()))
        );
        setResults(filtered);
      } catch (error) {
        setResults([]);
      }
    };
    fetchAndFilter();
  }, [query]);

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {results.map((item) => (
            <div
              key={item.id}
              className="search-result-item"
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="img-container">
                <img
                  src={item.imageUrl || "https://via.placeholder.com/100"}
                  alt={item.name}
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.name}</span>
                <span className="desc">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
