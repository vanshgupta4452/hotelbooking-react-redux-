import { createSlice } from '@reduxjs/toolkit'
import { Info } from '../data'

const initialState = {
  searches: localStorage.getItem("searched")?JSON.parse(localStorage.getItem("searched")):[],
  book: localStorage.getItem("booking")?JSON.parse(localStorage.getItem("booking")):[],
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      search: (state,action) => {
        state.searches.push(action.payload); 
        localStorage.setItem("searched", JSON.stringify(state.searches));
        console.log(`Updated state:`, state.searches);
        // JSON.parse(JSON.stringify(state.searches.push(action.payload)))
        // console.log(`change state`, JSON.parse(JSON.stringify(state)))
      }, 

      booking:(state,action)=>{
        state.book.push(action.payload);
        console.log(`JSON.stringify(state.book)`,action.payload)
        localStorage.setItem("booking", JSON.stringify(state.book))
        console.log(`change state`, JSON.parse(JSON.stringify(state)));
      }
    },
    
  })

  export const searchAction=searchSlice.actions
  export default searchSlice