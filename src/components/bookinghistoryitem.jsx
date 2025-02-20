import React from 'react'
import { Info } from '../data';
import Booking_page from './booking_history_page';
import { useSelector } from "react-redux";

const infoAll= Info

function Bookingitem() {

    const book=useSelector(state=>state.searched.book)
    console.log('book info',book)
    const hotelNames = book.map(item => item[0].current); 
    const hotelPrices = book.map(item => item[1].current);
    const filteredResults = infoAll
        .map(item => ({
            ...item,
            price: hotelPrices[hotelNames.indexOf(item.hotel)] // Find and attach the correct price
        }))
        .filter(item => hotelNames.includes(item.hotel));
    
    console.log('book filter',filteredResults)
  return (
    <>
    {filteredResults && filteredResults.length > 0 ?filteredResults.map((item)=><Booking_page Info={item} />):<h1>No booking</h1>}
    </>
  )
}

export default Bookingitem