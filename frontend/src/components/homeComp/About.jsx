import aboutContent from '../../contents/homeContent/AboutContent';
import skinSvg from '../../assets/skin_about.jpg';
import './HomeComp.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Kiri: ilustrasi */}
      <div className="about-image">
        <img src={skinSvg} alt="Ilustrasi tentang Dermacare" />
      </div>

      {/* Kanan: text */}
      <div className="about-text">
        <h2>{aboutContent.title}</h2>
        <p>{aboutContent.description}</p>
      </div>
    </section>
  );
};

export default About;
