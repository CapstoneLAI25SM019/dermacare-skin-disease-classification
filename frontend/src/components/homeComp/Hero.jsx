import { useNavigate } from 'react-router-dom';
import heroContent from '../../contents/homeContent/HeroContent';
import skinImage from '../../assets/skin_hero.svg';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section
            id="hero"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '80px 40px',
                backgroundColor: '#e6f0ff',
                flexWrap: 'wrap',
                borderRadius: '20px',
                gap: '40px',
            }}
        >
            {/* Kiri: Teks */}
            <div style={{ flex: 1, minWidth: '280px' }}>
                <h1 style={{
                    fontSize: '2.8rem',
                    marginBottom: '20px',
                    color: '#003f7f',
                    lineHeight: '1.2',
                    fontWeight: 'bold'
                }}>
                    {heroContent.title}
                </h1>
                <p style={{ fontSize: '1.25rem', marginBottom: '30px', color: '#555' }}>
                    {heroContent.subtitle}
                </p>
                <button
                    onClick={() => navigate('/prediksi')}
                    style={{
                        padding: '14px 56px',
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        backgroundColor: '#003f7f',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0, 63, 127, 0.3)',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0059b3'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#003f7f'}
                >
                    Mulai Deteksi
                </button>
            </div>

            {/* Kanan: Gambar */}
            <div style={{ flex: 1, textAlign: 'center', minWidth: '280px' }}>
                <img
                    src={skinImage}
                    alt="Ilustrasi deteksi kulit"
                    style={{
                        width: '100%',
                        maxWidth: '420px',
                        borderRadius: '12px'
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;
