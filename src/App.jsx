import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing'
import Features from './pages/Features';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';
import './App.css'

function App() {


  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/faq' element={<FAQs/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
