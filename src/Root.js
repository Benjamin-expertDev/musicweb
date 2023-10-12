import "./components/Navbar"
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      
      <Navbar/>
      <Outlet/>
      <Footer />
    
    </div>
  );
}

export default Root;

