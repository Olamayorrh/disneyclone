import "./Header.css"
const Header = (prop)=>{
    return(
        <div className="headerHead">
            <h1>{prop.head}</h1>
        </div>
    )
}

export default Header;