import React from "react";
import "./App.css";
import Slider from "./Components/Body/Slider";
import Footer from "./Components/Footer/Footer";
import BasicExample from "./Components/Navbar/MainNav";

function App() {
  return (
    <div className="App">
      <BasicExample />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
