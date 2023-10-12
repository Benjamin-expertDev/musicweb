import "./Main.css"
import image from "../images/result (59).png"

export default function Main(){
    return (
        <div className="mainmain">
            <img src={image} className="user" alt="user" />
            <div className ="join">
                <h1>Feel the Music</h1>
                <p>Stream with over 20 Thousand songs with one click</p>
                <button >Join Now</button>

            </div>

        </div>
    )
}