import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme:"light-mode"
    },
    reducers: {
        changeTheme(state, data) {
            let obj = data.payload
            state.theme = obj;
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer;