import { data } from "../../Mock data/Cards"
import "./Cards.css"
import ShowMoreText from "react-show-more-text";
function Cards({data}){
    const executeOnClick=(isExpanded)=> {
        console.log(isExpanded);
    }
    return (
        <div className="Card-mainContianer">
           {data && data.map((e)=>{
            return (
                <div className="Card-container" key={e.id}>
                <div className="Card-img"><img src={e.img}></img></div>
                <div className="Card-details">
                    <h4 className="Card-heading">{e.heading}</h4>
                    <p> <ShowMoreText
                /* Default options */
                lines={3}
                more="Show more"
                less="Show less"
                className="content-css"
                anchorClass="show-more-less-clickable"
                onClick={executeOnClick}
                expanded={false}
                width={0}
                truncatedEndingComponent={"... "}
            > {e.description}
            </ShowMoreText></p>
                </div>
                </div>
            )
           })}
        </div>
    )
}
export default Cards