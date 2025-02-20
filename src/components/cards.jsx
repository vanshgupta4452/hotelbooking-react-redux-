import { hotel } from "../data/4hotel";
import CardItem from "./cardItem"
// import { useSelector } from "react-redux"
const Cards=()=>{
   const Hotel=hotel

    return(
      <>
      <div className="cardkabox">
         {Hotel.map((item)=><CardItem info={item}/>)}
          {/* <CardItem/>
          <CardItem/>
          <CardItem/>
          <CardItem/> */}
      </div>
      
      </>
    )
} 

export default Cards;
