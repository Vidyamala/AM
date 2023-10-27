import { useContext } from "react";
import { appcontext } from "../../App";
import FindKeywords from "../FindKeywords/FindKeywords"
import "./Step3.css"
function Step3(){
    const {state,changeState}=useContext(appcontext);
    return (
        <div className="container Step3-container">
        <div className="Step3-header" onClick={()=>{changeState("step3")}}><p>Step 3: Finding keywords</p>{state.step3? <i className="fa-solid fa-chevron-up" ></i> :<i className="fa-solid fa-chevron-down" ></i>}</div>
       {state.step3 &&  <div>
            <FindKeywords />
        </div>}
    </div>
    )
}
export default Step3