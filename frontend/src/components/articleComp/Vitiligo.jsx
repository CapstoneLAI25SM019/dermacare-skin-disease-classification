import vitiligoContent from "../../contents/articleContent/VitiligoContent";
import "./ArticleComp.css";

const Vitiligo = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{vitiligoContent.title}</h2>

      <img
        src={vitiligoContent.image}
        alt={vitiligoContent.title}
        className="article-image"
      />

      <p className="article-paragraph">{vitiligoContent.description}</p>

      <h3 className="article-subtitle">Penanganan Awal yang Dapat Dilakukan</h3>
      <ul className="article-list">
        {vitiligoContent.treatment.map((item, index) => (
          <li key={index} className="article-list-item">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="article-subtitle">Upaya Pencegahan</h3>
      <ul className="article-list">
        {vitiligoContent.prevention.map((item, index) => (
          <li key={index} className="article-list-item">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="article-subtitle">Fakta Menarik</h3>
      <ul className="article-list">
        {vitiligoContent.fact.map((item, index) => (
          <li key={index} className="article-list-item">
            {item}
          </li>
        ))}
      </ul>

      <h4 className="article-subtitle">Sumber</h4>
      <ul className="article-list">
        {vitiligoContent.sources.map((src, index) => (
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

export default Vitiligo;
