import rosaceaContent from "../../contents/articleContent/rosaceaContent";

const Rosacea = () => {
  return (
    <section style={{ padding: '40px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{rosaceaContent.title}</h2>

      <img
        src={rosaceaContent.image}
        alt={rosaceaContent.title}
        style={{
          display: 'block',
          width: '500px',
          height: '400px',
          objectFit: 'cover',
          margin: '0 auto 20px',
          borderRadius: '8px'
        }}
      />

      <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
        {rosaceaContent.description}
      </p>

      <h3>Penanganan awal yang dapat dilakukan:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {rosaceaContent.treatment.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
        ))}
      </ul>

      <h3>Upaya pencegahan:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {rosaceaContent.prevention.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
        ))}
      </ul>

      <h3>Fakta Menarik:</h3>
      <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{rosaceaContent.fact[0]}</p>
      <p style={{ marginBottom: '20px' }}>{rosaceaContent.fact[1]}</p>

      <h3>Sumber:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {rosaceaContent.sources.map((src, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <a href={src} target="_blank" rel="noopener noreferrer">{src}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Rosacea;
