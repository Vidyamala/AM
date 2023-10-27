import Cards from "../Cards/Cards";
import { data } from "../../Mock data/Cards"
import "./Step1.css"
import { kitchenItem } from "../../Mock data/KitchenItems";
import { appcontext } from "../../App";
import { useContext } from "react";
function Step1(){
    const {state,changeState}=useContext(appcontext);
    return (
        <div className="container Step1-container">
            <div className="Step1-header" onClick={()=>{changeState("step1")}}><p>Step 1: Niche Products</p>{state.step1? <i className="fa-solid fa-chevron-up" ></i> :<i className="fa-solid fa-chevron-down" ></i>}</div>
           {state.step1 && <div className="step1-cont">
                <h4>Baby Products</h4>
                <hr></hr>
                <Cards data={data}/>
                <h4>Kitchen Tools</h4>
                <hr></hr>
                <Cards data={kitchenItem}/>
            </div>} 
        </div>
    )
}
export default Step1;