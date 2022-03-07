import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import BookPage from "./pages/BookPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/category" element={<CategoryPage />}></Route>
        <Route path="/book/:id" element={<BookPage />}></Route>
      </Routes>

    </>
  );
}

export default App;
