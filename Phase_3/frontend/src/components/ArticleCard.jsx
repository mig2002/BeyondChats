import { useEffect, useState } from "react";
import { fetchArticles } from "../services/api";
import "../styles/article.css";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [showUpdated, setShowUpdated] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then(res => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const toggleVersion = (id) => {
    setShowUpdated(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (loading) return <p className="loading">Loading articles...</p>;

  return (
    <div className="articles-container">
      {articles.map(article => {
        const isExpanded = expandedId === article._id;
        const isUpdatedView = showUpdated[article._id];

        const contentToShow = isUpdatedView
          ? article.content
          : article.originalContent;

        const preview = contentToShow?.slice(0, 300);

        return (
          <div
            key={article._id}
            className="article-card"
            onClick={() => toggleExpand(article._id)}
          >
            <h2 className="article-title">{article.title}</h2>

            <p className="article-content">
              {isExpanded ? contentToShow : `${preview}...`}
            </p>

            {article.isUpdated && (
              <button
                className="toggle-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleVersion(article._id);
                }}
              >
                {isUpdatedView ? "View Original" : "View Updated"}
              </button>
            )}

            <div className="status">
              Status: {article.isUpdated ? "Updated" : "Original"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Articles;
