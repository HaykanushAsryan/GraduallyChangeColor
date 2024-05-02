import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("data/get", async () => {
    try {
        const response = await axios.get('http://localhost:4000/Studio')
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error('Resource not found.');
        } else {
            console.error('Error:', error);
        }
    }
})

export const postData = createAsyncThunk("data/post", async (data) => {
    try {
        const response = await axios.post("http://localhost:4000/Studio", data)
        return response.data
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error('Resource not found.');
        } else {
            console.error('Error:', error);
        }
    }
})
export const addParentId = createAsyncThunk("data/patch", async (data) => {
    try {
        const response = await axios.patch(`http://localhost:4000/Studio/${data.id}`, data)
        return response.data

    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.error('Resource not found.');
        } else {
            console.error('Error:', error);
        }
    }

})

export const addOrder = createAsyncThunk("order/patch", async (data) => {
    try {
        const response = await axios.patch(`http://localhost:4000/Studio/${data.id}`, data)
        return response.data
    } catch (error) {
        console.error('Error:', error);
    }
})

export const studioSlice = createSlice({
    name: "studio",
    initialState: {
        studio: [],
        isLoading: false,
        colorsArr: [],
        error: ""
    },
    reducers: {
        studioDragDrop: (state, action) => {
            state.studio = action.payload
        }
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.isLoading = true
            state.error = ""
        },
        [getData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = ""
            state.studio = action.payload
        },
        [getData.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

    }

})
export const { studioDragDrop } = studioSlice.actions;
export default studioSlice.reducer