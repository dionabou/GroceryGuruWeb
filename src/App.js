import './App.css';
import Navbar from './components/Navbar';
// import Login from './pages/Login';
 import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Login from './pages/Login';
import StoreSelector from './pages/StoreSelector';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact Component={StoreSelector}/>
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
