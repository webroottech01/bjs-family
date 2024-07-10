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
import OurDifference from './pages/about/our-difference/our-difference';
import TrainingAcademy from './pages/about/training-academy/training-academy';
import CharityCommunity from './pages/about/charity-community/charity-community';
import Archivepage from './pages/news/archive-page/archive';
import GalleryPage1 from "./pages/about/gallery-page1/gallery-page1";
import Ourstory from './pages/about/our-story/our-story';
import Careers from './pages/career-page/careers';




function App() { 
  return (
    <div className="App">

      <BrowserRouter basename='/'>
        <Header />
        <Routes>
          <Route path="/news" element={<Newspage />} />
          <Route path="/article/:id" element={<Articlepage />} />
          <Route path="archive" element={<Archivepage />} />
          <Route path="/services" element={<Servicepage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/our-values" element={<Ourvalues />} /> 
          <Route path="/our-story" element={<Ourstory />} />
          <Route path="/our-difference" element={<OurDifference />} />
          <Route path="/training-academy" element= {<TrainingAcademy />} />
           <Route path="/charity-community" element= {<CharityCommunity />} />
           <Route path="/gallery-page1" element={<GalleryPage1 />} />
              </Routes>

        <Footer />
      </BrowserRouter> 

    </div>
  );
}

export default App;
