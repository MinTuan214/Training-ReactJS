import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMessage } from "../services/messageService";
import { getDepartments } from "../services/departmentService";

export const fetchMessage = createAsyncThunk(
  "message/fetchMessage",
  async (departmentId) => {
    const response = await getMessage(departmentId);
    return response;
  }
);

export const fetchDepartments = createAsyncThunk(
  "message/fetchDepartment",
  async () => {
    const response = await getDepartments();
    return response;
  }
);


const messageSlice = createSlice({
  name: "message",
  initialState: {
    messageList: [],
    departments: [],
    activeDepartment: null,
    nameMessage: null,
    viewDefault: true,
  },
  reducers: {
    setActiveDepartment: (state, action) => {
      state.activeDepartment = action.payload.id;
      state.nameMessage = action.payload.name;
      state.viewDefault = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.departments = action.payload;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.messageList = action.payload;
      });
  },
});

export const { setActiveDepartment } = messageSlice.actions;

export default messageSlice.reducer;
