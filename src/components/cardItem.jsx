import { useSelector } from "react-redux";
import { LiaStarSolid } from "react-icons/lia";

const CardItem=({info})=>{
//    console.log(`hahahahahaha`,info.hotel)
   
   return(
   
   <>
    <div className="card" style={{width: "18rem"}}>
        <img src="./images/DSC04555.webp" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{info.hotel}</h5>
            <p className="card-text">City:{info.city}  Stars:{info.stars}<LiaStarSolid /></p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
     </div>
      
   </>
   

)
}

export default CardItem;
