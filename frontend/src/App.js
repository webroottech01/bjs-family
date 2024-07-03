import logo from './logo.svg';
import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Technology from './pages/about/technology/technology';
import About from './pages/about/about/about';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Header /> 
      <BrowserRouter>
      <Routes>
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </BrowserRouter>
      
    <Footer />
     
    </div>
  );
}

export default App;
