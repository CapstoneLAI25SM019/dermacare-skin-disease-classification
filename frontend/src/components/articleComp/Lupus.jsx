import lupusContent from '../../contents/articleContent/LupusContent';
import './ArticleComp.css';

const Lupus = () => {
  return (
    <section className="article-section">
      <h2 className="article-title">{lupusContent.title}</h2>

      <img
        src={lupusContent.image}
        alt={lupusContent.title}
        className="article-image"
      />

      <p className="article-paragraph" style={{ whiteSpace: 'pre-line' }}>
        {lupusContent.description}
      </p>

      <h3 className="article-subtitle">Cara Pengobatan dan Pencegahan Lupus:</h3>
      <ul className="article-list">
        {lupusContent.treatmentAndPrevention.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <h3 className="article-subtitle">Sumber:</h3>
      <ul className="article-list">
        {lupusContent.sources.map((src, index) => (
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

export default Lupus;
