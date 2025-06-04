import featureContent from '../../contents/homeContent/FeatureContent';

const Features = () => {
    return (
        <section id="features" style={{ padding: '40px 0' }}>
            <h2>{featureContent.title}</h2>
            <ul>
                {featureContent.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </section>
    );
};

export default Features;
