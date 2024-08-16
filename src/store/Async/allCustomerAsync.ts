import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/Api";

export const allCustomer = createAsyncThunk<
    ICustomer[],
    void,
    { rejectValue: string }
>("allCustomer", async (_, { rejectWithValue }) => {
    try {
        const { data } = await API.get("/customer");
        console.log(data, "ini   ")
        return data
    } catch (error: any) {
        return rejectWithValue("error");
    }
});