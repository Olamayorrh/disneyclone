import "./Button.css"

const Button = (prop)=>{
    return(
        <div>
            <button id="btt">{prop.text}</button>
        </div>
    )
}
export default Button