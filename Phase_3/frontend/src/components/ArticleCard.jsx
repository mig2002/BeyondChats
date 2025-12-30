import { useEffect, useState } from "react";
import { fetchArticles } from "../services/api";
import "../styles/article.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then(res => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleArticle = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  if (loading) return <p className="loading">Loading articles...</p>;

  return (
    <div className="articles-container">
      {articles.map(article => {
        const isExpanded = expandedId === article._id;
        const previewText = article.content?.slice(0, 300);

        return (
          <div
            key={article._id}
            className="article-card"
            onClick={() => toggleArticle(article._id)}
          >
            <h2 className="article-title">{article.title}</h2>

            <p className="article-content">
              {isExpanded ? article.content : `${previewText}...`}
            </p>

            <div className="status">
              Status: {article.isUpdated ? "Updated" : "Original"}
            </div>

            <div className="read-more">
              {isExpanded ? "Read Less" : "Read More"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
