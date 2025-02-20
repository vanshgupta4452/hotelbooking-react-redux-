import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../store/searchSlice";
// import { Link } from "react-router";
import { useNavigate } from "react-router-dom";


const SearchBar=()=>{
    const search=useRef();
    const dispatch=useDispatch()
    const navigate = useNavigate();

    const handleOnClick=(event)=>{
        event.preventDefault();
        const searchValue = search.current.value;
        console.log(searchValue)
        dispatch(searchAction.search(searchValue))
        search.current.value = '';
    }
    const handleClick = () => {
        console.log("Navigating to /search...");
        navigate("/search"); // Redirects to "/search"
    };

    return(
        <>
        
            <p className="display-6 qoute">We compare hotel prices from over 100 sites</p>
            <form className="row mb-2 text-center searchbar" name="hotelSearchForm" onSubmit={handleOnClick}>
                <div className="col-md-3 themed-grid-col where" > 
                    <input className="form-control" ref={search} type="search" placeholder="Where To?" aria-label="Search"/>
                   
                </div>
                <div className="col-md-3 themed-grid-col where" >
                   
                    <input className="form-control" type="date" placeholder="WHere To?" aria-label="Search"/>
                   
                </div>
                <div className="col-md-3 themed-grid-col where" >
                    <input className="form-control" type="date" placeholder="Where To?" aria-label="Search"/>
                    
                </div>
                <div className="col-md-3 themed-grid-col where"  >
                    <button type="submit" className="btn btn-primary" onClick={handleClick} >Search</button> 
                </div>
            </form>
    
        </>
    )
}

export default SearchBar;