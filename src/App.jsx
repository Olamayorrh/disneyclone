import "./index.css"
import About from "./Components/About/About"
import CardOne from "./Components/CardOne/CardOne"
import Navbar from "./Components/Navbar/Navbar"
import About2 from "./Components/About2/About2"
import Imagecompo from "./Components/Imagecompo"
import Shop from "./Components/SHOP/shop"
import Header from "./Components/Header/Header"
import Park from "./Components/Park/Park"
import Shows from "./Components/Shows/Shows"
import Footer from "./Components/Footer/Footer"
import More from "./Components/More/More"


function App() {
  

  return (
    <div className="container">
      <Navbar />
      <About />
      <div className="card">
        <CardOne />
      </div>

      <div style={{backgroundColor:" rgb(4, 4, 136)",textAlign:"center",color:"white",padding:"10px"}}>
      <Header head="Whats on Disney+"/>
      <div className="cardtwo">
        

        <About2 
         />
        </div>
        <Imagecompo />
        </div>
        <div className="shopp">
        <Header head="Shop"/>
        <Shop />
        </div>

       <div>
        <Header head="Park"/>
        <div className="parkk">
         <Park image="../src/assets/images/disneylandorig.jpeg" title="DISNEY LAND"/>
          <Park image="../src/assets/images/cruise.jpeg" title="DISNEY LAND"/>
          <Park image="../src/assets/images/manDaughter.jpeg" title="DISNEY LAND"/>
        </div>
        </div>

        <div>
          <Header head="Shows"/>  
          <div className="display">
          <Shows img="./src/assets/images/lion.jpeg"/>
          <Shows img="./src/assets/images/frozen.jpeg"/>
          </div>
        </div>

        <div>
        <Header head="Movies"/>
        <div className="parkk">
         <Park image="../src/assets/images/starwars.jpeg" title="DISNEY LAND" />
          <Park image="../src/assets/images/insideout.jpeg" title="DISNEY LAND"/>
          <Park image="../src/assets/images/soul.jpeg" title="DISNEY LAND"/>
        </div>
        </div>

        <div>
          <Header head="More From Disney"/>  
          <div className="display">
          <More />
          
          </div>

        </div>

        <Footer/>
    </div>
  )
}

export default App
