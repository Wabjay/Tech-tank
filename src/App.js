import "./App.css";
import "./Styles/styles.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Works from "./pages/Works";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Dosimetry from "./pages/Cases/Dosimetry"
import Ecommerce from "./pages/Cases/Ecommerce";
import Loan from "./pages/Cases/Loan"
import Poverty from "./pages/Cases/Poverty"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/about-us" element={<AboutUs />} />

          <Route exact path='/dosimetry' element={<Dosimetry/>} />
          <Route exact path='/ecommerce' element={<Ecommerce/>}/>
          <Route exact path='/loan' element={<Loan/>} />
          <Route exact path='/poverty' element={<Poverty/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
