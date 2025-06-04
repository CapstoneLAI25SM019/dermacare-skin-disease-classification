import Hero from '../components/homeComp/Hero'
import About from '../components/homeComp/About';
import HowToUse from '../components/homeComp/HowToUse';
import Features from '../components/homeComp/Features';
import SectionWrapper from '../components/SectionWrapper';

const Home = () => {
    return (
        <div className="container">
            <SectionWrapper>
                <Hero />
            </SectionWrapper>
            <SectionWrapper>
                <About />
            </SectionWrapper>
            <SectionWrapper>
                <Features />
            </SectionWrapper>
            <SectionWrapper style={{ borderBottom: 'none', marginBottom: 0 }}>
                <HowToUse />
            </SectionWrapper>
        </div>
    );
};

export default Home;
