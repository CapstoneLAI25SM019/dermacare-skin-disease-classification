import eczemaContent from "../../contents/articleContent/EczemaContent.js";

const Eczema = () => {
    return (
        <section style={{ padding: '40px 0' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{eczemaContent.title}</h2>

            <img
                src={eczemaContent.image}
                alt={eczemaContent.title}
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
                {eczemaContent.description}
            </p>

            <h3>Bentuk Eksim:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {eczemaContent.forms.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
            </ul>

            <h3>Penanganan:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {eczemaContent.treatment.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
            </ul>

            <h3>Hal yang Harus Dihindari:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {eczemaContent.avoid.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
            </ul>

            <h3>Kapan Harus Konsultasi ke Dokter:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {eczemaContent.consult.map((item, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
                ))}
            </ul>

            <h3>Sumber:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {eczemaContent.sources.map((url, index) => (
                    <li key={index}>
                        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Eczema;
