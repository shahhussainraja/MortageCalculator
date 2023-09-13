import './App.css';
import logo from "./Images/logo.png"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MortageCalaculator from './Pages/Calculator/MortageCalculator'
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {

  return (
    <>
      {/* Main containner */}
      <div className='h-screen start-bg'>
        <div className='h-14 w-full flex items-center justify-start pl-4'>
          <img src={logo} alt='logo' className='w-11 h-11'></img>
          <p className='font-bold font-OpenSansRegular text-lg sm:text-2xl text-white'>Mortgage Calculator</p>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/borrowCapacity" element={<MortageCalaculator />} />


          </Routes>
        </BrowserRouter>

      </div>

    </>
  );
}

export default App;
