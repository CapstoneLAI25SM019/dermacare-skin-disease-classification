import jerawatContent from "../../contents/articleContent/JerawatContent";

const Jerawat = () => {
    return (
        <section style={{ padding: '40px 0' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{jerawatContent.title}</h2>

            <img
                src={jerawatContent.image}
                alt={jerawatContent.title}
                style={{
                    display: 'block',
                    maxWidth: '100%',
                    height: 'auto',
                    margin: '0 auto 20px',
                    borderRadius: '8px'
                }}
            />

            <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                {jerawatContent.description}
            </p>

            <h3>Cara Mengobati:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {jerawatContent.treatment.map((step, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {step}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Jerawat;
