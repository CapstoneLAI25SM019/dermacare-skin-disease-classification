import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Predict from './pages/Predict';
import AboutUs from './pages/AboutUs';
import Article from './pages/Article';

const RoutesList = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prediksi" element={<Predict />} />
            <Route path="/artikel" element={<Article />} />
            <Route path="/tentangkami" element={<AboutUs />} />
        </Routes>
    );
};

export default RoutesList;
