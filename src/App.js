import './App.css';
import mortageCapacity from './utility/mortageCapacity';
import logo from "./Images/logo.png"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MortageCalaculator from './Pages/MortageCalculator';
// import StartGuide from './Pages/StartGuide';
// import Calculator from './Pages/Calculator';
// import CalculatorNew from './Pages/CalculatorNew';


function App() {

  return (
    <>
      {/* Main containner */}
      <div className='h-screen'>
        
        <div className='h-16 w-full flex items-center justify-start pl-4 bg-[#006875]'>
          <img src={logo} alt='logo' className='w-11 h-11'></img>
          <p className='font-bold font-OpenSansRegular text-lg sm:text-2xl text-white'>Mortgage Calculator</p>
        </div>
      
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<StartGuide />} />
            <Route path="/Calculate" element={<Calculator />} />
            <Route path="/calculation" element={<CalculatorNew />} /> */}
            <Route path="/" element={<MortageCalaculator />} />
  

          </Routes>
        </BrowserRouter>

      </div>

    </>
  );
}

export default App;
