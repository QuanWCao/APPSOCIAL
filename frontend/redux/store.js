import { configureStore } from "@reduxjs/toolkit";
import { authReducer ,postReducer } from "./reducer";
const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});

export default store;