import './App.css';
import Navbar from './components/Navbar';
// import Login from './pages/Login';
 import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Login from './pages/Login';
import { BuildingList } from './pages/BuildingList';
import ProductDetails  from './pages/ProductDetails';
import { Compare } from './compare/Compare';
import { Main } from './ShoppingList/Main';
import UpdatePassword from './pages/UpdatePassword';
import StoreSelector from './pages/StoreSelector';
import Categories from './pages/Categories';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={SignUp}/>
           <Route path="/Login" Component={Login} /> 
          <Route path="/Home" Component={Home} />  
          <Route path="/UpdatePassword" Component={UpdatePassword} /> 
          <Route path="/BuildingList" Component={BuildingList} /> 
          <Route path="/StoreSelector" Component={StoreSelector} /> 
          <Route path="/Categories" Component={Categories} />   
          <Route path="/About" Component={About} />   
          <Route path="/ProductDetails/:companyStoreProductId" Component={ProductDetails} />  
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

