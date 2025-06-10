import psoriasisContent from "../../contents/articleContent/PsoriasisContent";
import "./ArticleComp.css";

const Psoriasis = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{psoriasisContent.title}</h2>

      <img
        src={psoriasisContent.image}
        alt={psoriasisContent.title}
        className="article-image"
      />

      <p className="article-paragraph">{psoriasisContent.description}</p>

      <h3 className="article-subtitle">Cara Pengobatan</h3>
      <ul className="article-list">
        {psoriasisContent.treatment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Upaya Pencegahan</h3>
      <ul className="article-list">
        {psoriasisContent.prevention.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Fakta Menarik</h3>
      <ul className="article-list">
        {psoriasisContent.fact.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4 className="article-subtitle">Sumber</h4>
      <ul className="article-list">
        {psoriasisContent.sources.map((src, index) => (
          <li key={index}>
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

export default Psoriasis;
