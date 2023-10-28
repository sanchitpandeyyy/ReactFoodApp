import './App.css';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
   <div >
     <Navbar/>
     <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
       
      </Routes>
     </div>
     <Footer/>
   </div>
  );
}

export default App;
