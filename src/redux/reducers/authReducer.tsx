import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  selectedMenu: any;


}
export const initialState: AuthState = {
  selectedMenu: "",

};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelectedMenu: (state, { payload }: PayloadAction<any>) => {
      state.selectedMenu = payload;
    },
   

  },
});

export const { setSelectedMenu } = authSlice.actions;
export default authSlice.reducer;
export const getSelectedMenu = (state: RootState) => state?.auth.selectedMenu;



