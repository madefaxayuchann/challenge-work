import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducers,
  },
});
