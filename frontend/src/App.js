import logo from './logo.svg';
import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <Header /> 
      <BrowserRouter>
      <Routes>
        
      </Routes>
      
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
