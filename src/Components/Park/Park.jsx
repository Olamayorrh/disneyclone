import "./Park.css"
const Park = (prop)=>{
    return(
        <div>
            <div className="imagg">
                <img src={prop.image} />
                <p>{prop.title}</p>
            </div>

        </div>
    )
}

export default Park;