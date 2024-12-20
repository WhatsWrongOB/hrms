import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { configuration, URL, useGetToken } from "../utils";

// Fetch quick insights using createAsyncThunk
export const getInsights = createAsyncThunk(
  "insight/getInsights",
  async (_, { rejectWithValue }) => {
    const token = useGetToken();

    try {
      const { data } = await axios.get(`${URL}/insights`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.insights;
    } catch (error) {
      console.error(
        error.response?.data.message || "Client : " + error.message
      );
      return rejectWithValue(
        error.response?.data.message || "Client : " + error.message
      ); // Handle error
    }
  }
);
