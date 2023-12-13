import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BuildingList } from './pages/BuildingList';
import Home from './pages/Home';
import Login from './pages/Login';
import  ProductDetails  from './pages/ProductDetails';
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
          <Route path="/categories/:addressId" element={<Categories />} />
          <Route path="/" exact Component={SignUp} />
          <Route path="/login" Component={Login} />
          <Route path="/home" Component={Home} />
          <Route path="/update_password" Component={UpdatePassword} />
          <Route path="/building_list" Component={BuildingList} />
          <Route path="/store_selector" Component={StoreSelector} />
          <Route path="/about" Component={About} />
          <Route path="/ProductDetails/:companyStoreProductId" Component={ProductDetails} /> 
          <Route path="/Compare" Component={Compare} />
          <Route path="/Main" Component={Main} />
          <Route path="/BuildingList" Component={BuildingList} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
