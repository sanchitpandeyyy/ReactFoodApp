import './App.css';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
   <div>
     <Navbar/>
     <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
     </div>
   </div>
  );
}

export default App;
