import { useRef } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { searchAction } from "../store/searchSlice";
import { ToastContainer, toast } from 'react-toastify';
  
const SearchItem=({Info})=>{
    // console.log(`hotel:`,{Info})
    const activeButton = useRef(); 

    const bookID=useRef()
    const bookcost=useRef()
    const despatch=useDispatch()
    const clickbook=(id)=>{
        bookID.current=id;
      console.log(`click book`,bookinfo)
      despatch(searchAction.booking(bookinfo))
      if (activeButton.current) {
        activeButton.current.classList.remove("active");
    }

      toast("Booked!")
    }

    const handleButtonClick = (e,money) => {
        if (activeButton.current) {
            activeButton.current.classList.remove("active");
        }
        activeButton.current = e.target;
        // console.log(`active button info`,activeButton.current)
        activeButton.current.classList.add("active");
        bookcost.current=money
        console.log(`active button info`,bookcost.current)
    };

    const bookinfo=[
        bookID,
        bookcost
    ]

    return(

        <>
        <div className="searchitem">
        <div className="card mb-3" style={{ maxWidth: "1040px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={Info.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{Info.hotel}</h5>
                    <p className="card-text">City:{Info.city}  Stars:{Info.stars}<LiaStarSolid /></p>
                    <div className="book-qua" >
                        <button type="button" class="btn btn-outline-primary" onClick={(e)=>handleButtonClick(e,12000)}>Primary 12000 per night</button>
                        <button type="button" class="btn btn-outline-secondary" onClick={(e)=>handleButtonClick(e,15000)}>Secondary 15000 per night</button>
                        <button type="button" class="btn btn-outline-success" onClick={(e)=>handleButtonClick(e,24000)}>Premium 24000 per night</button>
                    </div>
                    
                    <p className="card-text"><small className="text-body-secondary"><button type="button" className="btn btn-primary book" onClick={()=>clickbook(Info.hotel)}>Book Now</button></small></p>
                </div>
                
                </div>
            </div>
        </div>
        </div>
        </>
        

    )
}

export default SearchItem;