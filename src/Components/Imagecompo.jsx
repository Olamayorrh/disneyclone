import Button from "./Button/Button";

const Imagecompo =()=>{
    return(
        <div id="imagecom"style={{display:"flex", flexDirection:"column", backgroundColor: "rgb(4, 4, 136)", justifyContent:"center", alignItems:"center", width:"100%"}}>
        <img src="../src/assets/images/disneybrand.png" style={{width:"100%",height:"40px", backgroundColor: "rgb(4, 4, 136)"}}></img>
        <Button text="SUBSCRIBE NOW*"/>
        <p style={{color:"white"}}>Terms and condition apply|Terms and condition apply</p>
        </div>
    )
}

export default Imagecompo;