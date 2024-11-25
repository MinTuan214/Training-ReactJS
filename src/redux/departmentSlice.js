import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDepartments, getUsers } from "../services/departmentService";

export const fetchDepartments = createAsyncThunk(
  "departments/fetchDepartments",
  async () => {
    const response = await getDepartments();
    return response;
  }
);

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await getUsers();
  return response;
});

const departmentSlice = createSlice({
  name: "department",
  initialState: {
    departments: [],
    users: [],
    isAddModalOpen: false,
    isDeleteModalOpen: false,
  },
  reducers: {
    openAddModal: (state) => {
      state.isAddModalOpen = true;
    },
    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },
    closeAddModal: (state) => {
      state.isAddModalOpen = false;
    },
    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDepartments.fulfilled, (state, action) => {
        state.departments = action.payload;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export const {
  openAddModal,
  openDeleteModal,
  closeAddModal,
  closeDeleteModal,
} = departmentSlice.actions;

export default departmentSlice.reducer;
