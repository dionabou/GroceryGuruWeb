import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoreSelector from './pages/StoreSelector';
import Categories from './pages/Categories';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<StoreSelector />} />
          <Route path="/categories/:addressId" element={<Categories />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <label htmlFor=""></label>
      <label htmlFor=""></label>
      <label htmlFor=""></label>
      <Footer />
    </div>
  );
}

export default App;
