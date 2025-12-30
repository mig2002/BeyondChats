import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Articles from "./components/ArticleCard";
import "./index.css";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Articles />
    </>
  );
}

export default App;
