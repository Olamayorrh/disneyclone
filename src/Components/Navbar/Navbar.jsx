import "./Navbar.css"
const Navbar = ()=>{
    return(
        <div>

            <nav>
                <a href=""><img src="../src/assets/images/disneyLogo.png" id="navimg"></img></a>
                <ul id="list">
                    <li><a href="">DISNEY+</a></li>
                    <li><a href="">SHOP</a></li>
                    <li><a href="">MOVIES</a></li>
                    <li><a href="">SHOWS</a></li>
                    <li><a href="">PARKS</a></li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Navbar;