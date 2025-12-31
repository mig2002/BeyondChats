import axios from "axios";

const api = axios.create({
  baseURL: "https://beyondchats-09ne.onrender.com/api", 
});

export const fetchArticles = async () => {
  console.log("Calling /api/articles...");
  const res = await api.get("/articles");
  console.log("Response received");
  return res;
};
