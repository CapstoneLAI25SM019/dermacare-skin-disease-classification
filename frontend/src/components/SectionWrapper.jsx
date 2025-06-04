const SectionWrapper = ({ children, style }) => {
    return (
        <section
            style={{
                borderBottom: '1px solid #ddd',
                padding: '10px 10px',
                marginBottom: '10px',
                ...style,
            }}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;
