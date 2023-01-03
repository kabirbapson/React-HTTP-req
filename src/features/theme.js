import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state = action.payload
        }
    }
})
export const { changeTheme} = themeSlice.actions
export default themeSlice.reducer