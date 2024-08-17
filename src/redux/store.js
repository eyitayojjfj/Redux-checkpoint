import { configureStore } from "@reduxjs/toolkit"
import noteReducer from "./slice.js"



const store = configureStore({
    reducer:  {
        note: noteReducer,
    },
});

export default store