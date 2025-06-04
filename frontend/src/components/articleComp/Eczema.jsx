import eczemaContent from "../../contents/articleContent/EczemaContent";

const Eczema = () => {
    return (
        <section style={{ padding: '40px 0' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{eczemaContent.title}</h2>

            <img
                src={eczemaContent.image}
                alt={eczemaContent.title}
                style={{
                    display: 'block',
                    maxWidth: '100%',
                    height: 'auto',
                    margin: '0 auto 20px',
                    borderRadius: '8px'
                }}
            />

            <p style={{ marginBottom: '20px', textAlign: 'justify' }}>
                {eczemaContent.description}
            </p>

            <h3>Cara Mengobati:</h3>
            <ul style={{ paddingLeft: '20px' }}>
                {eczemaContent.treatment.map((step, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        {step}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Eczema;
