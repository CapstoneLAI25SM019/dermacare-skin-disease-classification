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
        borderRadius: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '40px',
            color: '#003f7f',
          }}
        >
          {howToUseContent.title}
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '80px',
            justifyItems: 'center',
            marginBottom: '40px',
          }}
        >
          {howToUseContent.steps.map((step, index) => (
            <div
              key={index}
              style={{
                width: '250px',
                padding: '20px',
                boxSizing: 'border-box',
                borderRadius: '16px',
                backgroundColor: '#e6f0ff',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                transition: 'transform 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={step.image}
                alt={`Langkah ${index + 1}`}
                style={{
                  width: '160px',
                  maxWidth: '100%',
                  height: 'auto',
                  marginBottom: '15px',
                }}
              />
              <h4
                style={{
                  marginBottom: '10px',
                  color: '#003f7f',
                  textAlign: 'center',
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#333',
                  textAlign: 'justify',
                  flexGrow: 1,
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

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
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0059b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#003f7f')}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Coba Sekarang
        </button>
      </div>
    </section>
  );
};

export default HowToUse;
