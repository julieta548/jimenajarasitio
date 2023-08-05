import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/hero';
import { About } from './Components/About/about';
import { Servicios } from './Components/Servicios/Servicios';
import Galeria from './Components/Galería/Galeria';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Servicios></Servicios>
      <Galeria></Galeria>
    </div>
  );
}

export default App;
