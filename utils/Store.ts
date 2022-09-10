import { configureStore } from "@reduxjs/toolkit";
import HeaderSlice from "../components/appbar/appbarSlice";
import { createWrapper } from "next-redux-wrapper";

const Store = configureStore({
  reducer: {
    HeaderSlice,
  },
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
export type AppStore = ReturnType<typeof Store>;

export const Wrapper = createWrapper<AppStore>(Store);
console.log("wwr", Wrapper);
export default Store;
