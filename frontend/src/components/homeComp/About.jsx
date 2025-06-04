import aboutContent from '../../contents/homeContent/AboutContent';
import skinSvg from '../../assets/skin_about.jpg';

const About = () => {
    return (
        <section 
          id="about" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '60px 40px', 
            backgroundColor: 'white',
            borderRadius: '20px',
            flexWrap: 'wrap' 
          }}
        >
            {/* Kiri: ilustrasi */}
            <div style={{ flex: 1, minWidth: '300px', paddingRight: '20px' }}>
                <img 
                  src={skinSvg} 
                  alt="Ilustrasi tentang Dermacare" 
                  style={{ width: '100%', maxWidth: '400px' }} 
                />
            </div>

            {/* Kanan: text */}
            <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#003f7f' }}>
                    {aboutContent.title}
                </h2>
                <p style={{ fontSize: '1.2rem', color: '#333', lineHeight: '1.6' , textAlign: 'justify'}}>
                    {aboutContent.description}
                </p>
            </div>
        </section>
    );
};

export default About;
