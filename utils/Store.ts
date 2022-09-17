import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "../components/appbar/appbarSlice";
import { createWrapper } from "next-redux-wrapper";

export const Store = configureStore({
  reducer: {
    HeaderSlice,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

//export default Store;
