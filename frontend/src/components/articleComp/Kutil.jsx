import kutilContent from '../../contents/articleContent/KutilContent';
import './ArticleComp.css';

const Kutil = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{kutilContent.title}</h2>

      <img
        src={kutilContent.image}
        alt={kutilContent.title}
        className="article-image"
      />

      <p className="article-paragraph" style={{ whiteSpace: 'pre-line' }}>
        {kutilContent.description}
      </p>

      <h3 className="article-subtitle">Cara Mengobati:</h3>
      <ul className="article-list">
        {kutilContent.treatment.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Pencegahan Kutil:</h3>
      <ul className="article-list">
        {kutilContent.prevention.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Sumber:</h3>
      <ul className="article-list">
        {kutilContent.sources.map((src, index) => (
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

export default Kutil;
