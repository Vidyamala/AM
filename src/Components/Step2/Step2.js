import CheckAvailability from "../CheckAvailablity/CheckAvailablity";
import "./Step2.css"
function Step2(){
    return (
        <div className="container Step2-container">
        <div className="Step2-header"><p>Step 2: Get Hoisting & Domain</p><i className="fa-solid fa-chevron-up"></i></div>
        <div>
            <CheckAvailability />
        </div>
    </div>
    )
}
export default Step2;