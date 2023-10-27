import { useContext } from "react";
import { appcontext } from "../../App";
import CheckAvailability from "../CheckAvailablity/CheckAvailablity";
import "./Step2.css"
function Step2(){
    const {state,changeState}=useContext(appcontext);
    return (
        <div className="container Step2-container">
        <div className="Step2-header" onClick={()=>{changeState("step2")}}><p>Step 2: Get Hoisting & Domain</p>{state.step2? <i className="fa-solid fa-chevron-up" ></i> :<i className="fa-solid fa-chevron-down" ></i>}</div>
        {state.step2 && <div>
            <CheckAvailability />
        </div>}
    </div>
    )
}
export default Step2;