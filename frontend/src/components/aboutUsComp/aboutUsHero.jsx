import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";
import AboutHeroImg from "../../assets/aboutUs.svg";
import "../aboutUsComp/AboutUsComp.css"

const AboutUsHero = () => {
  return (
    <section id="about-hero" className="about-hero-section">
      <h1 className="about-hero-title">
        {aboutUsContent.hero.title}
      </h1>

      <p className="about-hero-description">
        {aboutUsContent.hero.description}
      </p>

      <img
        src={AboutHeroImg}
        alt="Ilustrasi Tentang Kami"
        className="about-hero-image"
      />
    </section>
  );
};

export default AboutUsHero;
