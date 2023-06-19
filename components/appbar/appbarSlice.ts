import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export interface initState {
  showMenuIcon: boolean;
}

const initialState : initState = {
  showMenuIcon : true
}

const Slice = createSlice({
  name : "AppbarSlice",
	initialState,
  reducers: {
    toggleMenu : (state, action)=> {
      state.showMenuIcon = !state.showMenuIcon;
    }
  }
})

export const { toggleMenu }  = Slice.actions;
export default Slice.reducer
