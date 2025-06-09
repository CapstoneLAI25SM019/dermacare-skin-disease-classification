import SectionWrapper from '../components/SectionWrapper';
import HeroArticle from '../components/articleComp/HeroArticle';
import TableOfContents from '../components/TableOfContents';
import { articleComponents } from '../contents/articleComponents';

const Article = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', scrollBehavior: 'smooth' }}>
      <SectionWrapper>
        <HeroArticle />
      </SectionWrapper>

      <SectionWrapper>
        <TableOfContents />
      </SectionWrapper>

      {articleComponents.map(({ id, Component }, index) => {
        const isLast = index === articleComponents.length - 1;

        return (
          <SectionWrapper
            key={id}
            style={isLast ? { borderBottom: 'none', marginBottom: 0 } : {}}
          >
            <div id={id} style={{ scrollMarginTop: '5rem' }}>
              <Component />
            </div>
          </SectionWrapper>
        );
      })}
    </div>
  );
};

export default Article;
