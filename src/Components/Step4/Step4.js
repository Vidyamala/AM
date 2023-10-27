import FindSearch from "../FindSearch/FindSearch";
import "./Step4.css"
function Step4(){
    return (
        <div className="container Step4-container">
        <div className="Step4-header"><p>Step 4: Find Number of Searches</p><i className="fa-solid fa-chevron-up"></i></div>
        <div>
          <FindSearch />
        </div>
    </div>
    )
}
export default Step4;