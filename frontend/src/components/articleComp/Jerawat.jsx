import jerawatContent from "../../contents/articleContent/JerawatContent.js";
import './ArticleComp.css';

const Jerawat = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{jerawatContent.title}</h2>

      <img
        src={jerawatContent.image}
        alt={jerawatContent.title}
        className="article-image"
      />

      <p className="article-paragraph">{jerawatContent.description}</p>

      <h3 className="article-subtitle">Bentuknya bisa berupa:</h3>
      <ul className="article-list">
        {jerawatContent.forms.map((form, index) => (
          <li key={index}>{form}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Penanganan yang dapat dilakukan:</h3>
      <ul className="article-list">
        {jerawatContent.treatment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Hal yang harus dihindari:</h3>
      <ul className="article-list">
        {jerawatContent.avoid.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Segera konsultasi ke dokter spesialis kulit jika:</h3>
      <ul className="article-list">
        {jerawatContent.consult.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Sumber:</h3>
      <ul className="article-list">
        {jerawatContent.sources.map((src, index) => (
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

export default Jerawat;
