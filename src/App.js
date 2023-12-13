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
import Favorites from './pages/Favorites';
import ShoppingList from './pages/ShoppingList';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/categories/:addressId" element={<Categories />} />
            <Route path="/trips/:tripId" element={<ShoppingList />} />
            <Route path="/" exact Component={SignUp} />
            <Route path="/login" Component={Login} />
            <Route path="/home" Component={Home} />
            <Route path="/update_password" Component={UpdatePassword} />
            <Route path="/building_list" Component={BuildingList} />
            <Route path="/store_selector" Component={StoreSelector} />
            <Route path="/about" Component={About} />
            <Route path="/favorites" Component={Favorites} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
