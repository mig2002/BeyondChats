import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", 
});

export const fetchArticles = async () => {
  console.log("Calling /api/articles...");
  const res = await api.get("/articles");
  console.log("Response received");
  return res;
};
