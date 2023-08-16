import { Router, Route, Routes } from 'react-router-dom';
import './App.css';
import InfoBanner from './Components/InfoBanner/InfoBanner';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      {/* <InfoBanner />
      <Navbar /> */}
      <Routes>
        <Route element={<Home />} path='/' />
      </Routes>
    </div>
  );
}

export default App;
