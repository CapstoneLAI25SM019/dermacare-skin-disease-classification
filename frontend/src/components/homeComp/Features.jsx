import featureContent from '../../contents/homeContent/FeatureContent';

const Features = () => {
  return (
    <section
      id="features"
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
          {featureContent.title}
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
          {featureContent.features.map((feature, index) => (
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
                src={feature.image}
                alt={`Ikon ${feature.title}`}
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
                {feature.title}
              </h4>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#333',
                  textAlign: 'justify',
                  flexGrow: 1,
                }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
