import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage/HomePage"
import AboutUs from './pages/AboutUs/AboutUs';
import MainNavbar from './components/MainNavbar';
import CategoryPage from "./pages/CategoryPage";
import BookPage from "./pages/BookPage"

import Payment from './pages/Payment/Payment';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainNavbar />}>
          <Route index element={<HomePage/>} />
          <Route path="about" element={<AboutUs />} />  
        </Route> 
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/book/:id" element={<BookPage />}></Route>
      </Routes>
    </>
  );
}

export default App;;
