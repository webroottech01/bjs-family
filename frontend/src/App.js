import logo from './logo.svg';
import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Servicepage from './pages/service-page/servicepage';


function App() {
  return (
    <div className="App"> 
      <Header /> 
      <BrowserRouter> 
      <Routes>
        <Route path="/servicepage" element={<Servicepage />} />    
      </Routes>
      
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
