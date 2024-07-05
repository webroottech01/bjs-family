import './App.css';
import './style.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header';
import Servicepage from './pages/service-page/servicepage';
import Newspage from './pages/news/news-page/newspage'
import Articlepage from './pages/news/article-page/articlepage';
import Home from './pages/home/home';
import Technology from './pages/about/technology/technology';
import Ourvalues from './pages/about/our-values/our-values';
import Footer from './components/footer/footer'; 



function App() { 
  return (
    <div className="App">

      <BrowserRouter basename='/'>
        <Header />
        <Routes>
          <Route path="/news" element={<Newspage />} />
          <Route path="/article/:id" element={<Articlepage />} />
          <Route path="/services" element={<Servicepage />} />
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/our-values" element={<Ourvalues />} /> 
        </Routes>

        <Footer />
      </BrowserRouter> 

    </div>
  );
}

export default App;
