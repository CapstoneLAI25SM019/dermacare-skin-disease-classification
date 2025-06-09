import jerawatContent from "../../contents/articleContent/JerawatContent.js";

const Jerawat = () => {
  return (
    <section style={{ padding: '40px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{jerawatContent.title}</h2>

      <img
        src={jerawatContent.image}
        alt={jerawatContent.title}
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
        {jerawatContent.description}
      </p>

      <h3>Bentuknya bisa berupa:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {jerawatContent.forms.map((form, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{form}</li>
        ))}
      </ul>

      <h3>Penanganan yang dapat dilakukan:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {jerawatContent.treatment.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
        ))}
      </ul>

      <h3>Hal yang harus dihindari:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {jerawatContent.avoid.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
        ))}
      </ul>

      <h3>Segera konsultasi ke dokter spesialis kulit jika:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {jerawatContent.consult.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
        ))}
      </ul>

      <h3>Sumber:</h3>
      <ul style={{ paddingLeft: '20px' }}>
        {jerawatContent.sources.map((src, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <a href={src} target="_blank" rel="noopener noreferrer">{src}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Jerawat;
