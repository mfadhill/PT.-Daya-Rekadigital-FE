import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import customerReducer from "./Slice/allCustomerSlice";
// import getTotalReducer from "./Slice/getTotalSlice";

const store = configureStore({
    reducer: {
        customer: customerReducer,
        // getTotal: getTotalReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
