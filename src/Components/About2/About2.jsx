import "./About2.css"
import image1 from "./images/marvels.jpeg"
import image2 from "./images/iwaju.jpeg"
import image3 from "./images/percy.jpeg"
import Header from "../Header/Header"


const About2 = (prop)=>{
    const cardDisplay =[{
        id:1,
        title:'The Marvels',
        
        img:image1
      },
      {
        id:2,
        title:'iwaju',
        
        img: image2
      },
    
      {
        id:3,
        title:"Percy Jackson And The Olypians",
        img: image3
      }
      
     
      ]
      
      return (
    
   
        <>
          
          {
              cardDisplay.map((elem)=>{
    
              return (
                
                <>
                <div key = {elem.id} className="array">
                <div><img src={elem.img} /></div>
                <div><p>{elem.title} </p></div>
               
                 </div>

                 </>
    
              )
            })
        
          }
          
        </>
      )
    }

export default About2;