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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
