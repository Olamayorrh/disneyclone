import Header from "../Header/Header";
import "./Shows.css"

const Shows = (prop)=>{
    return(
        <>
       
        <div className="display">
            
            <img src={prop.img} />
            
        </div>
        </>
    )
}

export default Shows;