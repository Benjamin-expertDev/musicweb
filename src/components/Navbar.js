import soundwave from "../images/soundwave.jpg"
import "../components/Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <div className = "header">
            <nav className="Logo-name">
                <img src={soundwave} className="App-logo" alt="logo" />
                <p>soundwave</p>            
            </nav>
            <nav>
                <ul>
                    <li><Link to="/Discover">Discover</Link></li>
                    <li><Link to ="/Join"> Join</Link></li>
                </ul>
                 
                
            </nav>

        </div>
    )
}