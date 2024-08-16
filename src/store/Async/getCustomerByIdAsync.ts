import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/Api";

export const getCustomerById = createAsyncThunk<
  ICustomer[],
  string,
  { rejectValue: string }
>("allCustomer", async (name:string, { rejectWithValue }) => {
  try {
    const { data } = await API.get("/post/name/"+name);

    return data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
