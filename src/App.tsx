import { Routes, Route } from "react-router";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
