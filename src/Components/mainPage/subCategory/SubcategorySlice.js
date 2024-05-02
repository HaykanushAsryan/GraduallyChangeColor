import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Category = createAsyncThunk("category/get", async () => {
    try {
        const response = await axios.get('http://localhost:3000/Subcategory')
        return response.data
    } catch (error) {
        console.log(error)
    }
})
export const PostCategory = createAsyncThunk("category/post", async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/Subcategory', data)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const UpdateCategory = createAsyncThunk("category/patch", async (data) => {
    try {
        const response = await axios.patch(`http://localhost:3000/Subcategory/${data.id}`, data)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        category: [],
        isLoading: false,
        error: ""
    },
    extraReducers: {
        [Category.pending]: (state) => {
            state.isLoading = true
            state.error = ""
        },
        [Category.fulfilled]: (state, action) => {
            state.isLoading = false
            state.error = ""
            state.category = action.payload
        },
        [Category.rejected]: (state, actin) => {
            state.isLoading = false
            state.error = actin.payloadz
        }
    }
})

export default categorySlice.reducer