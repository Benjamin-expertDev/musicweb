import React from "react";
import "./Join.css"

export default function Join(){
    return(
        <div className="full">
            <div className="text"><h1 className = "joiner">Join the</h1>
            <h1 className="joined">fun.</h1>
            </div>
            <div className="form">
            <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
         <label>
           <p>email</p>
           <input name="email" />
         </label>
         <label>
           <p>Password</p>
           <input name="password" required/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
            </div>
        </div>
    )
}