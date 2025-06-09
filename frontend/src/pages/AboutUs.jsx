import AboutUsHero from "../components/aboutUsComp/aboutUsHero";
import SectionWrapper from "../components/SectionWrapper";
import Developer from "../components/aboutUsComp/Developer";
import Tech from "../components/aboutUsComp/Tech";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <SectionWrapper>
        <AboutUsHero />
      </SectionWrapper>

      <SectionWrapper>
        <Developer />
      </SectionWrapper>

      <SectionWrapper style={{ borderBottom: 'none', marginBottom: 0 }}>
        <Tech />
      </SectionWrapper>
    </div>
  );
};

export default AboutUs;
