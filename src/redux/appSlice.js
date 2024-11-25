import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  username: localStorage.getItem("username"),
  userId: localStorage.getItem("id"),
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("id");
        toast.success("Đăng xuất thành công!");
    }
  },
});
export const { logout, setUser } = appSlice.actions;

export default appSlice.reducer;
