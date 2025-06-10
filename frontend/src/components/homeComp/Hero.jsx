import { useNavigate } from 'react-router-dom';
import heroContent from '../../contents/homeContent/HeroContent';
import skinImage from '../../assets/skin_hero.svg';
import './HomeComp.css'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      {/* Kiri: Teks */}
      <div className="hero-text">
        <h1>{heroContent.title}</h1>
        <p>{heroContent.subtitle}</p>
        <button
          className="hero-button"
          onClick={() => navigate('/prediksi')}
        >
          Mulai Deteksi
        </button>
      </div>

      {/* Kanan: Gambar */}
      <div className="hero-image">
        <img src={skinImage} alt="Ilustrasi deteksi kulit" />
      </div>
    </section>
  );
};

export default Hero;
