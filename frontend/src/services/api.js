import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const getProducts = async () => {
  const response = await apiClient.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

export const getCart = async () => {
  const response = await apiClient.get("/cart");
  return response.data;
};

export const addToCart = async (productId, quantity) => {
  const params = new URLSearchParams();
  params.append("productId", productId.toString());
  params.append("quantity", quantity.toString());
  const response = await apiClient.post("/cart/add", params);
  return response.data;
};

export const removeFromCart = async (productId) => {
  const params = new URLSearchParams();
  params.append("productId", productId.toString());
  const response = await apiClient.post("/cart/remove", params);
  return response.data;
};

export const clearCart = async () => {
  const response = await apiClient.post("/cart/clear");
  return response.data;
};
