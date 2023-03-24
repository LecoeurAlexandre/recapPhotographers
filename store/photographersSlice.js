import { createSlice } from "@reduxjs/toolkit";

const photographers = createSlice({
    name : 'photographers',
    initialState : {
        photographers : []
    },
    reducers : {
        addPhotographer : (state, action) => {
            state.photographers.push(action.payload)
        }
    }
})

export const addPhotographer = photographers.actions.addPhotographer;
export default photographers.reducer;