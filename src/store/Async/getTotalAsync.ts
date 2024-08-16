// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { API } from "../../lib/Api";


// interface ITotal {
//     totalPrice: number;
// }

// interface IGetTotalParams {
//     customerId: number;
// }

// export const getTotal = createAsyncThunk<
//     ITotal,
//     IGetTotalParams,
//     { rejectValue: string }
// >("getTotal", async ({ customerId }, { rejectWithValue }) => {
//     try {
//         const { data } = await API.get(`/customer/${customerId}/total-price`);
//         return data
//     } catch (error: any) {
//         return rejectWithValue("error");
//     }
// });

