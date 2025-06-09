import heroArticleContent from '../../contents/articleContent/HeroArticle.js';
import HeroSVG from '../../assets/hero-article.svg';

const HeroArticle = () => {
    return (
        <section id="hero" style={{ padding: '60px 0', textAlign: 'center' }}>
            <h1
                style={{
                    fontSize: '2.4rem',
                    marginBottom: '20px',
                    color: '#003f7f',
                    lineHeight: '1.2',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
            >
                {heroArticleContent.title}
            </h1>
            <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 40px' }}>
                {heroArticleContent.subtitle}
            </p>

            <img
                src={HeroSVG}
                alt="Ilustrasi Artikel"
                style={{
                    width: '400px',
                    maxWidth: '90%',
                    margin: '0 auto',
                    display: 'block',
                }}
            />
        </section>
    );
};

export default HeroArticle;
