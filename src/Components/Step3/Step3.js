import FindKeywords from "../FindKeywords/FindKeywords"
import "./Step3.css"
function Step3(){
    return (
        <div className="container Step3-container">
        <div className="Step3-header"><p>Step 3: Finding keywords</p><i className="fa-solid fa-chevron-up"></i></div>
        <div>
            <FindKeywords />
        </div>
    </div>
    )
}
export default Step3