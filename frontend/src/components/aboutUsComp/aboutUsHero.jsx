import aboutUsContent from "../../contents/aboutUsContent/aboutUsContent";
import AboutHeroImg from "../../assets/aboutUs.svg"

const AboutUsHero = () => {
  return (
    <section id="about-hero" style={{ padding: '60px 0', textAlign: 'center' }}>
      <h1
        style={{
          fontSize: '2.4rem',
          marginBottom: '20px',
          color: '#003f7f',
          lineHeight: '1.2',
          fontWeight: 'bold',
        }}
      >
        {aboutUsContent.hero.title}
      </h1>

      <p
        style={{
          fontSize: '1.25rem',
          maxWidth: '900px',
          margin: '0 auto 40px',
          color: '#555',
          whiteSpace: 'pre-line',
        }}
      >
        {aboutUsContent.hero.description}
      </p>

      <img
        src={AboutHeroImg}
        alt="Ilustrasi Tentang Kami"
        style={{
          width: '500px',
          maxWidth: '90%',
          margin: '0 auto',
          display: 'block',
        }}
      />
    </section>
  );
};

export default AboutUsHero;
