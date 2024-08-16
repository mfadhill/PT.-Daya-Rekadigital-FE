import { createSlice } from "@reduxjs/toolkit";
import { allCustomer } from "../Async/allCustomerAsync";

const initialState: {
    [x: string]: any; customer: ICustomer[]
} = {
    customer: [],
};

export const allCustomerSlice = createSlice({
    name: "allCustomer",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allCustomer.pending, (state) => {
                state.customer = [];
            })
            .addCase(allCustomer.fulfilled, (state, action) => {
                state.customer = action.payload;
            })
            .addCase(allCustomer.rejected, (state) => {
                state.customer = [];
            });
    },
});

export default allCustomerSlice.reducer;