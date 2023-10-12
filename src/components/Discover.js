import "./Discover.css"
import albums from "../images/Albums.PNG"
import charts from "../images/charts.PNG"
import discover from "../images/discover.PNG"
import more from "../images/More.PNG"

export default function Discover(){
    return(
        
        <div className="disc">                      
            <nav className="imag">
            <h2>Discover new music</h2>
            <img src={charts} className="chart" alt="charts" />
            <img src={albums} className="albums" alt="albums" />
            <img src={more} className="more" alt="more" />
            <p className = "point">By joining you can benefit by listening to the latest albums released</p>
            </nav>            
            <img src={discover} className="Discover" alt="Discover Benja" />
        </div>
    )
}