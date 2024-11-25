import { configureStore } from "@reduxjs/toolkit";
import departmentReducer from "./departmentSlice";
import appReducer from "./appSlice";
import messageReducer from "./messageSlice"

const store = configureStore({
    reducer: {
        app: appReducer,
        department: departmentReducer,
        message: messageReducer,
    },
})

export default store;