import { useState } from "react";
import CardForAvailability from "../CardForAvailability/CardForAvailability";
import "./CheckAvailablity.css"
function CheckAvailability(){
    const [site,setSite]=useState("");
    const [show,setShow]=useState(false)
    return (
        <div className="check-availability-main">
            <div className="Check-availability-container">
                <h5>Choosing your Hoisting and Domain</h5>
                <p className="check-availability-heading">1. Pick a name for your site.</p>
                <input placeholder="Type site name..." onChange={(e)=>{setSite(e.target.value);setShow(false)}}></input>
                <button onClick={()=>{setShow(true)}}>Check Availability</button>
                <CardForAvailability show={show} site={site}/>
                <p className="check-availability-heading">2. Get Hoisting with free Domain</p>
                <p>Once you find your site's name, the next step is to get hoisting & domain. The domain is the name of your site and hositing puts your website on the internet</p>
                <button>Get Hoisting & Free Domain</button>
            </div>
        </div>
    )
}
export default CheckAvailability;