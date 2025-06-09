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
        <div style={{
            marginTop: '30px',
            backgroundColor: '#e6f0ff',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}>
            <div style={{ lineHeight: '1.6', fontSize: '1rem' }}>
                {diseaseInfo}
            </div>
        </div>
    );
};

export default DiseaseComponent;
