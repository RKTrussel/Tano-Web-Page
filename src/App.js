import './App.css';
import Skills from './Pages/Skills';
import Home from './Pages/Home';
import Navigation from './Pages/Navigation';
import Contact from './Pages/Contact';
import About from './Pages/About';
import { Routes, Route } from 'react-router-dom';


function NavRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );

}

function App() {
  return (
    <>
        <Navigation />
        {NavRouter()}
    </>
  );
}

export default App;
