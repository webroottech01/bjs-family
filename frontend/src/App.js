import logo from './logo.svg';
import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Newspage from './pages/news/news-page/newspage'


function App() {
  return (
    <div className="App">
      <Header /> 
      <BrowserRouter>
      <Routes>

        <Route path="/newspage" element={<Newspage />} />  

        
      </Routes>
      
    </BrowserRouter>
    
     
    </div>
  );
}

export default App;
