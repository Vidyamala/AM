import CardForAvailability from "../CardForAvailability/CardForAvailability";
import "./CheckAvailablity.css"
function CheckAvailability(){
    return (
        <div className="check-availability-main">
            <div className="Check-availability-container">
                <h5>Choosing your Hoisting and Domain</h5>
                <p className="check-availability-heading">1. Pick a name for your site.</p>
                <input></input>
                <button>Check Availability</button>
                <CardForAvailability />
                <p className="check-availability-heading">2. Get Hoisting with free Domain</p>
                <p>Once you find your site's name, the next step is to get hoisting & domain. The domain is the name of your site and hositing puts your website on the internet</p>
                <button>Get Hoisting & Free Domain</button>
            </div>
        </div>
    )
}
export default CheckAvailability;