import logo from './logo.svg';
import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Home from './pages/home/home';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter basename='/'>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
      
    </BrowserRouter>
    <Footer />
     
    </div>
  );
}

export default App;
