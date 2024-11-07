import React from "react";
import Navbar from "./components/navbar/Navbar";
import ContactUs from "./components/contactUs/ContactUs";
import Connect from "./components/stayConnected/Connect";
import Map from "./components/map/Map";
import Footer from "./components/footer/Footer";
import SpecialOffer from "./components/specialOffer/SpecialOffer";

function App() {
  return (
    <div>
      <Navbar />
      <ContactUs />
      <Connect />
      <Map />
      <SpecialOffer />
      <Footer />
    </div>
  );
}

export default App;
