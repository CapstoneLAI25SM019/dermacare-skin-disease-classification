import { useNavigate } from 'react-router-dom';
import howToUseContent from '../../contents/homeContent/HowToUseContent';

const HowToUse = () => {

    const navigate = useNavigate();

    return (
        <section
            id="howtouse"
            style={{
                padding: '60px 40px',
                backgroundColor: '#f9fbfc',
                textAlign: 'center',
                borderRadius: '20px',
            }}
        >
            <h2 style={{ fontSize: '2rem', color: '#003f7f', marginBottom: '40px' }}>
                {howToUseContent.title}
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '30px',
                    justifyItems: 'center',
                    marginBottom: '40px',
                }}
            >
                {howToUseContent.steps.map((step, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#e6f0ff',
                            padding: '20px',
                            borderRadius: '16px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                            maxWidth: '250px',
                        }}
                    >
                        <img
                            src={step.image}
                            alt={`Langkah ${index + 1}`}
                            style={{ width: '80px', marginBottom: '15px' }}
                        />
                        <h3 style={{ 
                            color: '#003f7f' }}>Langkah {index + 1}</h3>
                        <p style={{ 
                            fontSize: '1rem', 
                            color: '#333', 
                            textAlign: 'justify' 
                        }}
                    >
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Tombol Coba Sekarang */}
                <button
                    onClick={() => navigate('/prediksi')}
                    style={{
                        padding: '14px 28px',
                        fontSize: '1rem',
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
                    Coba Sekarang
                </button>
        </section>
    );
};

export default HowToUse;
