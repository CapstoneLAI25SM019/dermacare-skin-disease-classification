import cacarAirContent from "../../contents/articleContent/CacarAirContent.js";
import './ArticleComp.css';

const CacarAir = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{cacarAirContent.title}</h2>

      <img
        src={cacarAirContent.image}
        alt={cacarAirContent.title}
        className="article-image"
      />

      <p className="article-paragraph">{cacarAirContent.description}</p>

      <h3 className="article-subtitle">Bentuknya bisa berupa:</h3>
      <ul className="article-list">
        {cacarAirContent.forms.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Penanganan yang dapat dilakukan:</h3>
      <ul className="article-list">
        {cacarAirContent.treatment.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Yang perlu dihindari:</h3>
      <ul className="article-list">
        {cacarAirContent.avoid.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Kapan harus ke dokter:</h3>
      <ul className="article-list">
        {cacarAirContent.consult.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Sumber:</h3>
      <ul className="article-list">
        {cacarAirContent.sources.map((src, i) => (
          <li key={i}>
            <a href={src.url} target="_blank" rel="noopener noreferrer">
              {src.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CacarAir;
