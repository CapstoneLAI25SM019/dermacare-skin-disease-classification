import { useNavigate } from 'react-router-dom';
import howToUseContent from '../../contents/homeContent/HowToUseContent';
import './HomeComp.css';

const HowToUse = () => {
  const navigate = useNavigate();

  return (
    <section id="howtouse" className="howtouse-section">
      <div className="howtouse-container">
        <h2 className="howtouse-title">{howToUseContent.title}</h2>

        <div className="howtouse-grid">
          {howToUseContent.steps.map((step, index) => (
            <div className="howtouse-card" key={index}>
              <img
                src={step.image}
                alt={`Langkah ${index + 1}`}
                className="howtouse-icon"
              />
              <h4 className="howtouse-step-title">{step.title}</h4>
              <p className="howtouse-step-text">{step.text}</p>
            </div>
          ))}
        </div>

        <button className="howtouse-button" onClick={() => navigate('/prediksi')}>
          Coba Sekarang
        </button>
      </div>
    </section>
  );
};

export default HowToUse;
