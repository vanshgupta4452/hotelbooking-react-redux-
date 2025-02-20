import SearchItem from "../components/searchitem"
import { useSelector } from "react-redux";
import { Info } from "../data";
import { useEffect } from "react";
const infoAll = Info

  const SearchResult=()=>{
   
    const info=useSelector(store=>store.searched.searches)
    console.log(`info`,info[info.length - 1])
    console.log(`infoall`,infoAll)
    const filteredResults = infoAll.filter((item) => item.city === info[info.length-1]);
    console.log(`filtered`,filteredResults)

    
    
   return(
    <>
      {filteredResults && filteredResults.length > 0 ?filteredResults.map((item)=><SearchItem Info={item}/>):<h1>Not Found</h1>} 
      <img class="BT7GK0" src="https://imgcy.trivago.com//hardcodedimages/homepage-landing/usp/Search.svg" alt="Search simply"></img>    
    </>
   )
}

export default SearchResult;