import { useContext } from "react";
import { appcontext } from "../../App";
import FindSearch from "../FindSearch/FindSearch";
import "./Step4.css"
function Step4(){
    const {state,changeState}=useContext(appcontext);
    return (
        <div className="container Step4-container">
        <div className="Step4-header" onClick={()=>{changeState("step4")}}><p>Step 4: Find Number of Searches</p>{state.step4? <i className="fa-solid fa-chevron-up" ></i> :<i className="fa-solid fa-chevron-down" ></i>}</div>
       {state.step4 &&  <div>
          <FindSearch />
        </div>}
    </div>
    )
}
export default Step4;