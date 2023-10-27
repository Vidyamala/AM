import { availableCard } from "../../Mock data/availableCard";
import "./CardForAvailability.css"
function CardForAvailability(){
    return (
        <div>
           {
            availableCard && availableCard.map((e)=>{
                return (
                    <div className="Available-container">
                    <i class="fa-solid fa-circle-check"></i>
                    <div >
                        <h6>{e.name}</h6>
                        <p>Available Now</p>
                        <button style={{padding:"0.2rem 1rem"}}>Get in Now</button>
                    </div>
                    </div>
                )
            })
           }
        </div>
    )
}
export default CardForAvailability;