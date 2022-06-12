import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
