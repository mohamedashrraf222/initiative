import "./App.css";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import About from "./assets/about";
import Joinus from "./assets/Joinus";
import Details from "./assets/Details";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* the next component is for عن المبادرة  */}
      <About />   
      {/* the component if for من نحن   */}
      <Details />
      {/* the component if for توصل معنا و سجل بالمبادرة   */}
      <Joinus />
    </>
  );
}

export default App;
