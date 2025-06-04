import SectionWrapper from '../components/SectionWrapper';
import HeroArticle from '../components/articleComp/HeroArticle';
import CacarAir from '../components/articleComp/CacarAir';
import Eczema from '../components/articleComp/Eczema';
import Jerawat from '../components/articleComp/Jerawat';
import Kudis from '../components/articleComp/Kudis';
import Kurap from '../components/articleComp/Kurap';
import Kutil from '../components/articleComp/Kutil';
import Lupus from '../components/articleComp/Lupus';
import Psioriasis from '../components/articleComp/Psioriasis';
import Rosacea from '../components/articleComp/Rosacea';
import Vitiligo from '../components/articleComp/Vitiligo';


const Article = () => {
    return (
        <div className="container">
            <SectionWrapper>
                <HeroArticle />
            </SectionWrapper>
            <SectionWrapper>
                <CacarAir />
            </SectionWrapper>
            <SectionWrapper>
                <Eczema />
            </SectionWrapper>
            <SectionWrapper>
                <Jerawat />
            </SectionWrapper>
             <SectionWrapper>
                <Kudis />
            </SectionWrapper>
            <SectionWrapper>
                <Kurap />
            </SectionWrapper>
            <SectionWrapper>
                <Kutil />
            </SectionWrapper>
            <SectionWrapper>
                <Lupus />
            </SectionWrapper>
            <SectionWrapper>
                <Psioriasis />
            </SectionWrapper>
             <SectionWrapper>
                <Rosacea />
            </SectionWrapper>
             <SectionWrapper>
                <Vitiligo />
            </SectionWrapper>                                     
        </div>
    );
};

export default Article;