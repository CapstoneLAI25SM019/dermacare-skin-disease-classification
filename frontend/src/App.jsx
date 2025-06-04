import { BrowserRouter as Router } from 'react-router-dom';
import RoutesList from './routes';
import Navbar from './components/navigationComp/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="app-main">
          <RoutesList />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
