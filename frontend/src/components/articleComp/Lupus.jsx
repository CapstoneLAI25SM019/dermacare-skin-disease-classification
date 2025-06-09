import lupusContent from '../../contents/articleContent/LupusContent.js';

const Lupus = () => {
    return (
        <section style={{ padding: '40px 0' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{lupusContent.title}</h2>

            <img
                src={lupusContent.image}
                alt={lupusContent.title}
                style={{
                display: 'block',
                width: '500px',
                height: '400px',
                objectFit: 'cover',
                margin: '0 auto 20px',
                borderRadius: '8px'
                }}
            />

            <p style={{ marginBottom: '20px', textAlign: 'justify', whiteSpace: 'pre-line' }}>
                {lupusContent.description}
            </p>

            <h3>Cara Pengobatan dan Pencegahan Lupus:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {lupusContent.treatmentAndPrevention.map((point, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {point}
                    </li>
                ))}
            </ul>

            <h4 style={{ marginTop: '30px' }}>Sumber:</h4>
            <ul style={{ paddingLeft: '20px' }}>
                {lupusContent.sources.map((url, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                        <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
                            {url}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Lupus;
