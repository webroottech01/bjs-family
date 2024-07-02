import logo from './logo.svg';
import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <Header /> 
      <BrowserRouter>
      <Routes>
        
      </Routes>
      
    </BrowserRouter>
    <Footer />
     
    </div>
  );
}

export default App;
