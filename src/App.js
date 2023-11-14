import './App.css';
import Navbar from './components/Navbar';
// import Login from './pages/Login';
 import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Login from './pages/Login';
import ProductDetailPage from './pages/ProductDetails';
import { BuildingList } from './pages/BuildingList';
import { ProductDetails } from './pages/ProductDetails';
import { Compare } from './compare/Compare';
import { Main } from './ShoppingList/Main';

function App() {
  return (
    <div className="App">h
      <Router>
       { <Navbar/> }
        <Routes>
          <Route path="/" exact Component={SignUp}/>
          {/* <Route path="/Home" exact component={Home} /> */}
        </Routes>
       </Router>
       <label htmlFor=""></label>
       <label htmlFor=""></label>
       <label htmlFor=""></label>
       <Footer/>
    </div>
  );
}

export default App;

