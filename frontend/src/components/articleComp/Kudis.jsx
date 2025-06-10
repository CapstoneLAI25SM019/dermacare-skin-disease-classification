import kudisContent from "../../contents/articleContent/KudisContent.js";
import './ArticleComp.css';

const Kudis = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{kudisContent.title}</h2>

      <img
        src={kudisContent.image}
        alt={kudisContent.title}
        className="article-image"
      />

      <p className="article-paragraph">{kudisContent.description}</p>

      <h3 className="article-subtitle">Bentuknya bisa berupa:</h3>
      <ul className="article-list">
        {kudisContent.forms.map((form, index) => (
          <li key={index}>{form}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Penanganan yang dapat dilakukan:</h3>
      <ul className="article-list">
        {kudisContent.treatment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Hal yang harus dihindari:</h3>
      <ul className="article-list">
        {kudisContent.avoid.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Segera konsultasi ke dokter spesialis kulit jika:</h3>
      <ul className="article-list">
        {kudisContent.consult.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Sumber:</h3>
      <ul className="article-list">
        {kudisContent.sources.map((src, index) => (
          <li key={index}>
            <a href={src.url} target="_blank" rel="noopener noreferrer">
              {src.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Kudis;
