import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axiosInstance";


// Fetch Departments
export const getDepartments = createAsyncThunk(
  "department/getDepartments",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/departments`);
      return data.department;
    } catch (error) {
      console.error(
        error.response?.data.message || "Failed to fetch departments"
      );
      return rejectWithValue(
        error.response?.data.message || "Failed to fetch departments"
      );
    }
  }
);
