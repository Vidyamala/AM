import Cards from "../Cards/Cards";
import { data } from "../../Mock data/Cards"
import "./Step1.css"
import { kitchenItem } from "../../Mock data/KitchenItems";
function Step1(){
    return (
        <div className="container Step1-container">
            <div className="Step1-header"><p>Step 1: Niche Products</p><i className="fa-solid fa-chevron-up"></i></div>
            <div className="step1-cont">
                <h4>Baby Products</h4>
                <hr></hr>
                <Cards data={data}/>
                <h4>Kitchen Tools</h4>
                <hr></hr>
                <Cards data={kitchenItem}/>
            </div>
        </div>
    )
}
export default Step1;