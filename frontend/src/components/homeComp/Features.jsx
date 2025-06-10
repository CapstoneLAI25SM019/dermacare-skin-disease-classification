import featureContent from '../../contents/homeContent/FeatureContent';
import './HomeComp.css';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="features-title">{featureContent.title}</h2>

        <div className="features-grid">
          {featureContent.features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img
                src={feature.image}
                alt={`Ikon ${feature.title}`}
                className="feature-icon"
              />
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
