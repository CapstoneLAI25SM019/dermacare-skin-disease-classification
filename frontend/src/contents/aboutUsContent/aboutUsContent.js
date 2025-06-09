import reactIcon from '../../assets/react.svg';
import viteIcon from '../../assets/vite.svg';
import flaskIcon from '../../assets/flask.svg';
import vscodeIcon from '../../assets/vscode.svg';
import colabIcon from '../../assets/google-colab.svg';
import tensorflowIcon from '../../assets/tensorflow.svg';
import mobilenetIcon from '../../assets/keras.svg';

const aboutUsContent = {
  hero: {
    title: "Tentang Proyek",
    description: `Aplikasi ini merupakan capstone project dari program LaskarAI 2025, 
yang bertujuan untuk membantu pengguna melakukan prediksi awal penyakit kulit 
melalui gambar berbasis teknologi Artificial Intelligence.`,
  },
  team: {
    title: "Tim Pengembang",
    members: [
      {
        name: "Ade Safarudin M.",
        role: "Model Deployment",
        github: "https://github.com/lukyg",
        linkedin: "https://linkedin.com/in/ade-safarudin-madani",
      },
      {
        name: "Ahmad Raihan",
        role: "Training Model",
        github: "https://github.com/ahmad-raihan",
        linkedin: "https://linkedin.com/in/ahmad-raihan",
      },
      {
        name: "Desti Mustika S.",
        role: "Data Collection & Processing",
        github: "https://github.com/desti-mustika",
        linkedin: "https://linkedin.com/in/desti-mustika",
      },
      {
        name: "Bela Ismawati N.",
        role: "Model Evaluation & Documentation",
        github: "https://github.com/bela-ismawati",
        linkedin: "https://linkedin.com/in/bela-ismawati",
      },
    ],
  },
  tech: {
    title: "Teknologi yang Digunakan",
    stack: [
      {
        name: "React",
        url: "https://reactjs.org/",
        icon: reactIcon,
      },
      {
        name: "Vite",
        url: "https://vitejs.dev/",
        icon: viteIcon,
      },
      {
        name: "Flask",
        url: "https://flask.palletsprojects.com/",
        icon: flaskIcon,
      },
      {
        name: "Visual Code Studio",
        url: "https://code.visualstudio.com/",
        icon: vscodeIcon,
      },
      {
        name: "Google Colab",
        url: "https://colab.research.google.com/",
        icon: colabIcon,
      },
      {
        name: "TensorFlow",
        url: "https://www.tensorflow.org/",
        icon: tensorflowIcon,
      },
      {
        name: "Model MobileNet",
        url: "https://keras.io/api/applications/mobilenet/",
        icon: mobilenetIcon,
      },
    ],
  }
};

export default aboutUsContent;
