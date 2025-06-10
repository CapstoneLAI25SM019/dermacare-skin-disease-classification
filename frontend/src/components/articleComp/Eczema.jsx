import eczemaContent from "../../contents/articleContent/EczemaContent.js";
import './ArticleComp.css';

const Eczema = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{eczemaContent.title}</h2>

      <img
        src={eczemaContent.image}
        alt={eczemaContent.title}
        className="article-image"
      />

      <p className="article-paragraph">{eczemaContent.description}</p>

      <h3 className="article-subtitle">Bentuk Eksim:</h3>
      <ul className="article-list">
        {eczemaContent.forms.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Penanganan:</h3>
      <ul className="article-list">
        {eczemaContent.treatment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Hal yang Harus Dihindari:</h3>
      <ul className="article-list">
        {eczemaContent.avoid.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Kapan Harus Konsultasi ke Dokter:</h3>
      <ul className="article-list">
        {eczemaContent.consult.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Sumber:</h3>
      <ul className="article-list">
        {eczemaContent.sources.map((src, index) => (
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

export default Eczema;
