import heroArticleContent from '../../contents/articleContent/HeroArticle';

const HeroArticle = () => {
    return (
        <section id="hero" style={{ padding: '60px 0', textAlign: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                {heroArticleContent.title}
            </h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
                {heroArticleContent.subtitle}
            </p>
        </section>
    );
};

export default HeroArticle;
