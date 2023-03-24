import { configureStore } from "@reduxjs/toolkit";
import photographers from "./photographersSlice"

export const store = configureStore ({
    reducer : {
        photographers : photographers
    }
})