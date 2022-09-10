import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface initState {
  showMenuIcon: Boolean;
}

const initialState : initState = {
  showMenuIcon : true
}

const Slice = createSlice({
  name : "AppbarSlice",
  initialState,
  reducers: {
    toggleMenu : (state) : void=> {
      state.showMenuIcon = !state.showMenuIcon;
    }
  }
})

export const { toggleMenu }  = Slice.actions;
export default Slice.reducer
