// Import semua komponen penyakit
import CacarAir from '../articleComp/CacarAir';
import Eczema from '../articleComp/Eczema';
import Jerawat from '../articleComp/Jerawat';
import Kudis from '../articleComp/Kudis';
import Kurap from '../articleComp/Kurap';
import Kutil from '../articleComp/Kutil';
import Lupus from '../articleComp/Lupus';
import Psoriasis from '../articleComp/Psoriasis';
import Rosacea from '../articleComp/Rosacea';
import Vitiligo from '../articleComp/Vitiligo';
import './PredictionComp.css';

const DiseaseComponent = ({ prediction }) => {
    const diseaseMap = {
        'cacar air': <CacarAir />,
        'eczema': <Eczema />,
        'jerawat': <Jerawat />,
        'kudis': <Kudis />,
        'kurap': <Kurap />,
        'kutil': <Kutil />,
        'lupus': <Lupus />,
        'psoriasis': <Psoriasis />,
        'rosacea': <Rosacea />,
        'vitiligo': <Vitiligo />
    };

    const diseaseInfo = diseaseMap[prediction.toLowerCase()];

    if (!diseaseInfo) return null;

    return (
        <div className="disease-container">
            <div className="disease-content">
                {diseaseInfo}
            </div>
        </div>
    );
};

export default DiseaseComponent;
