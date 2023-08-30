import { Router, Route, Routes } from 'react-router-dom';
import './App.css';
import InfoBanner from './Components/InfoBanner/InfoBanner';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Checkout from './Pages/Checkout/Checkout';
import OurStory from './Pages/OurStory/OurStory';

function App() {
  return (
    <div className="App">
      {/* <InfoBanner />
      <Navbar /> */}
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Shop />} path='/shopall'/>
        <Route element={<OurStory />} path='/ourstory'/>
        <Route path='/:productId' element={<ProductDetail />}/>
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
