import kurapContent from '../../contents/articleContent/KurapContent.js';
import './ArticleComp.css';

const Kurap = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{kurapContent.title}</h2>

      <img
        src={kurapContent.image}
        alt={kurapContent.title}
        className="article-image"
      />

      <p className="article-paragraph" style={{ whiteSpace: 'pre-line' }}>
        {kurapContent.description}
      </p>

      <h3 className="article-subtitle">Cara Mengobati:</h3>
      <ul className="article-list">
        {kurapContent.treatment.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Sumber:</h3>
      <ul className="article-list">
        {kurapContent.sources.map((src, index) => (
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

export default Kurap;
