import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/pages/Shop';
import Products from './components/pages/Products';
import Projects from './components/pages/Projects';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/products' element={<Products />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
