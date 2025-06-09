import uploadImg from '../../assets/upload.svg';
import waitingImg from '../../assets/waiting.svg';
import resultImg from '../../assets/result.svg';
import adviceImg from '../../assets/advice.svg';

const howToUseContent = {
  title: "Cara Menggunakan Aplikasi",
  steps: [
    {
      image: uploadImg,
      title: "Langkah 1",
      text: "Unggah gambar kulit Anda.",
    },
    {
      image: waitingImg,
      title: "Langkah 2",
      text: "Tunggu analisis selesai.",
    },
    {
      image: resultImg,
      title: "Langkah 3",
      text: "Lihat hasil diagnosa AI.",
    },
    {
      image: adviceImg,
      title: "Langkah 4",
      text: "Baca saran perawatan.",
    }
  ]
};

export default howToUseContent;
