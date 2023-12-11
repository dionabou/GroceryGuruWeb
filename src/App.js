import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoreSelector from './pages/StoreSelector';
import Categories from './pages/Categories';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import UpdatePassword from './pages/UpdatePassword';
import { BuildingList } from './pages/BuildingList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/categories/:addressId" element={<Categories />} />
          <Route path="/" exact Component={SignUp} />
          <Route path="/login" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/update_password" Component={UpdatePassword} />
          <Route path="/building_list" Component={BuildingList} />
          <Route path="/store_selector" Component={StoreSelector} />
          <Route path="/about" Component={About} />
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
