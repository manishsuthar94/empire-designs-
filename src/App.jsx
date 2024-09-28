import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Shop from "./Components/Shop";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart"; // Import Cart component
import PageNotFound from "./Components/PageNotFound";
import AnimatedCursor from "react-animated-cursor";
import Team from "./Components/Team";
import Bedroom from "./Components/Categories/Bedroom";
import LivingRoom from "./Components/Categories/LivingRoom";
import Office from "./Components/Categories/Office";
import Details from "./Components/Details";

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={10}
        outerSize={37}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgb(79 70 229)",
          boxShadow: "0 0 8px rgba(91, 33, 182, 0.8)",
        }}
        outerStyle={{
          border: "4px solid rgb(129 140 248)",
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/team" element={<Team />} />

        <Route path="/office" element={<Office />} />
        <Route path="/livingroom" element={<LivingRoom />} />
        <Route path="/bedroom" element={<Bedroom />} />

        <Route path="/details/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
