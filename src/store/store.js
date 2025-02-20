import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice';
const store = configureStore({
  reducer: {
    searched:searchSlice.reducer
  },
})

export default store;