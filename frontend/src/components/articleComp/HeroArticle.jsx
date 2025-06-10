import heroArticleContent from '../../contents/articleContent/HeroArticle.js';
import HeroSVG from '../../assets/hero-article.svg';
import './ArticleComp.css';

const HeroArticle = () => {
  return (
    <section id="hero" className="hero-article">
      <h1 className="hero-article-title">
        {heroArticleContent.title}
      </h1>

      <p className="hero-article-subtitle">
        {heroArticleContent.subtitle}
      </p>

      <img
        src={HeroSVG}
        alt="Ilustrasi Artikel"
        className="hero-article-image"
      />
    </section>
  );
};

export default HeroArticle;
