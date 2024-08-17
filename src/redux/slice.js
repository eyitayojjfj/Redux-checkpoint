import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name: 'Note',
    initialState: [],
    reducers: {
        addNote: (state, action) => {
            state.push(action.payload);
        },
        deleteNote: (state, action) => {
            return state.filter((note) => note.id !==action.paylooad);
        },
        editNote: (state, action) => {
            const {id, text} = action.payload;
            const existinNote = state.find(note => note.id === id);
            if (existinNote) {
                existinNote.text = text;
            }
        },
    },
});
export const {addNote, deleteNote, editNote} = slice.actions;

export default slice.reducer