import AboutUsHero from "../components/aboutUsComp/aboutUsHero";
import SectionWrapper from "../components/SectionWrapper";
import Developer from "../components/aboutUsComp/Developer";
import Tech from "../components/aboutUsComp/Tech";
import Thanks from "../components/aboutUsComp/Thanks";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <SectionWrapper>
        <AboutUsHero />
      </SectionWrapper>

      <SectionWrapper>
        <Developer />
      </SectionWrapper>

      <SectionWrapper>
        <Tech />
      </SectionWrapper>

      <SectionWrapper style={{ borderBottom: 'none', marginBottom: 0 }}>
        <Thanks />
      </SectionWrapper>
    </div>
  );
};

export default AboutUs;
