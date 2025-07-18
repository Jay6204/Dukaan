import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getCategories = async () => {
  const response = await apiClient.get("/categories");
  return response.data;
};

export const getCategoriesById = async (id) => {
  const response = await apiClient.get(`/categories/${id}`);
  return response.data;
}

export const getProducts = async () => {
  const response = await apiClient.get("/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
}

export const signupUser = async (userData) => {
  const response = await apiClient.post("/users/signup", userData);
  return response.data;
};

export const loginUser = async (credentials) => {

  try {
    const response = await apiClient.post("/users/login", credentials);
    const { token, userName, email } = response.data;
    localStorage.setItem("token", token);
    return { token, userName, email };
  } catch (error) {
    console.error("Login error:", error.response?.status, error.response?.data);
    throw error;
  }
};



export const logoutUser = () => {
  localStorage.removeItem("token");
}