import { createSlice } from "@reduxjs/toolkit";


const filtersCloseSlice = createSlice({
name: "filtersClose",
initialState: true,
reducers:{
    setFiltersCloseSlice: (state, action) => action.payload
}
 })

 export default filtersCloseSlice.reducer
export const {setFiltersCloseSlice} = filtersCloseSlice.actions