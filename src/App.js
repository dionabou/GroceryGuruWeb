import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BuildingList } from './pages/BuildingList';
import Home from './pages/Home';
import Login from './pages/Login';
// import Logout from './pages/Logout';
import { ProductDetails } from './pages/ProductDetails';
import SignUp from './pages/SignUp';
import UpdatePassword from './pages/UpdatePassword';
import { Main } from './ShoppingList/Main';
import { Compare } from './compare/Compare';
import Categories from './pages/Categories';
import About from './pages/About';
import StoreSelector from './pages/StoreSelector';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/Storeselector" element={<StoreSelector />} />
          <Route path="/categories/:addressId" element={<Categories />} />
          <Route path="/ProductDetails/:productId" element={<ProductDetails />} />
          <Route path="/BuildingList" element={<BuildingList />} />
          
          <Route path="/UpdatePassword" element={<UpdatePassword />} />
          <Route path="/ShoppingList" element={<Main />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
