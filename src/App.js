import './App.css';
import mortageCapacity from './utility/mortageCapacity';
import logo from "./Images/logo.png"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartGuide from './Pages/StartGuide';
import Calculator from './Pages/Calculator';



function App() {


  return (
    <>
      {/* Main containner */}
      <div className='h-screen'>
        {/* Logo */}
        <div className='h-16 w-full flex items-center justify-start space-x-2 pl-4 bg-[#006875]'>
          {/* <img src={logo} alt='logo' className='w-10 h-10'></img> */}
          <p className='font-bold font-OpenSansRegular  text-2xl text-white'>Moratage Calculator</p>
        </div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartGuide />} />
            <Route path="/Calculate" element={<Calculator />} />
          </Routes>
        </BrowserRouter>

      </div>

    </>
  );
}

export default App;
