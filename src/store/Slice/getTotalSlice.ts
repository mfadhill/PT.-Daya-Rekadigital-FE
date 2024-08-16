// import { createSlice } from "@reduxjs/toolkit";
// import { getTotal } from "../Async/getTotalAsync";

// const initialState: ITotal = {
//     totalPrice: 0
// }

// export const getTotalSlice = createSlice({
//     name: "getTotal",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(getTotal.pending, (state) => {
//                 state.totalPrice = 0
//             })
//             .addCase(getTotal.fulfilled, (state, action) => {
//                 state.totalPrice = action.payload.totalPrice
//             })
//             .addCase(getTotal.rejected, (state) => {
//                 state.totalPrice = 0
//             });
//     },
// })

// export default getTotalSlice.reducer