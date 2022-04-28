import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './components/pages/Shop';
import Products from './components/pages/Products';
import Projects from './components/pages/Projects';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Shop} />
          <Route path='/products' component={Products} />
          <Route path='/projects' component={Projects} />
          <Route path='/about-us' component={AboutUs} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
