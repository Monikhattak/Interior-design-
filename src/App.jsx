import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Customers from "./pages/Customers ";
import Process_Section from "./pages/Process_Section";
import Section from "./pages/Section";
import Services from "./pages/Services";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <Section/>
    <Process_Section/>
    <Customers/>
    </>
  );
}

export default App;
