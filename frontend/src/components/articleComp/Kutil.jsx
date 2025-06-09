import kutilContent from '../../contents/articleContent/kutilContent';

const Kutil = () => {
    return (
        <section style={{ padding: '40px 0' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{kutilContent.title}</h2>

            <img
                src={kutilContent.image}
                alt={kutilContent.title}
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
                {kutilContent.description}
            </p>

            <h3>Cara Mengobati:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {kutilContent.treatment.map((step, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {step}
                    </li>
                ))}
            </ul>

            <h3>Pencegahan Kutil:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {kutilContent.prevention.map((step, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {step}
                    </li>
                ))}
            </ul>

            <h4 style={{ marginTop: '30px' }}>Sumber:</h4>
            <ul style={{ paddingLeft: '20px' }}>
                {kutilContent.sources.map((url, index) => (
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

export default Kutil;
