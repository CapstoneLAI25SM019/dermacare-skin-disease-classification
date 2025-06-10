import rosaceaContent from "../../contents/articleContent/RosaceaContent";
import "./ArticleComp.css";

const Rosacea = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{rosaceaContent.title}</h2>

      <img
        src={rosaceaContent.image}
        alt={rosaceaContent.title}
        className="article-image"
      />

      <p className="article-paragraph">{rosaceaContent.description}</p>

      <h3 className="article-subtitle">Penanganan Awal yang Dapat Dilakukan</h3>
      <ul className="article-list">
        {rosaceaContent.treatment.map((item, index) => (
          <li key={index} className="article-list-item">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="article-subtitle">Upaya Pencegahan</h3>
      <ul className="article-list">
        {rosaceaContent.prevention.map((item, index) => (
          <li key={index} className="article-list-item">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="article-subtitle">Fakta Menarik</h3>
      <ul className="article-list">
        {rosaceaContent.fact.map((item, index) => (
          <li key={index} className="article-list-item">
            {item}
          </li>
        ))}
      </ul>

      <h4 className="article-subtitle">Sumber</h4>
      <ul className="article-list">
        {rosaceaContent.sources.map((src, index) => (
          <li key={index} className="article-list-item">
            <a
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="article-link"
            >
              {src.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rosacea;
