
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import JoinUs from './pages/JoinUs';
import Gallery from './pages/Gallery';


function App() {
  return (
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/ContactUs" element={<Contact/>} />
          <Route path="/AboutUs" element={<About/>} />
          <Route path="/JoinUs" element={<JoinUs/>} />
          <Route path="/Gallery" element={<Gallery/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;