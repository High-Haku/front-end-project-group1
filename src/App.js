import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage/HomePage"
import AboutUs from './pages/AboutUs/AboutUs';
import MainNavbar from './components/MainNavbar';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainNavbar />}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutUs />} />  
        </Route> 
      </Routes>
    </>
  );
}

export default App;;
