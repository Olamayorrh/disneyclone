import "./CardOne.css"

import image1 from "./images/mary1.jpeg"
import image2 from "./images/manDaughter.jpeg"
import image3 from "./images/family.jpeg"
import image4 from "./images/toys.jpeg"



const CardOne = ()=>{
  const display =[{
    id:1,
    title:'MARY POPPINS THE MUSICAL',
    body:"Someone margical is returning.The classic multi award winning. musical will embark on a tour,from November Book your tickets Now",
    cat: "SHOWS",
    img:image1
  },
  {
    id:2,
    title:'NORTH HOLLYWOOD',
    body:"Someone margical is returning.The classic multi award winning. musical will embark on a tour,from November Book your tickets Now",
    cat: "TVME. Comedy,Drama.Movies",
    img: image2
  },

  {
    id:3,
    title:'ABDUCTED BY MY TEACHER',
    body:"Someone margical is returning.The classic multi award winning. musical will embark on a tour,from November Book your tickets Now",
    cat: "TV14. Drama.Movies(2023)",
    img: image3
  },
  {
    id:4,
    title:'THE MARSH KING"S DAUGHTER',
    body:"Someone margical is returning.The classic multi award winning. musical will embark on a tour,from November Book your tickets Now",
    cat: "R.Thriller.Movies(2023)",
    img: image4
  }
 
  ]
  return (
    
   
    <>
      {
          display.map((val)=>{

          return (
            
            
            <div key = {val.id} className="cardContainer">
            <div><img src={val.img} /></div>
            <div><p>{val.title} </p></div>
            <div><p>{val.body} </p></div>
            <div><p>{val.cat}</p></div>
            
          
          </div>

          )
        })
    
      }
    </>
  )
}

export default CardOne;