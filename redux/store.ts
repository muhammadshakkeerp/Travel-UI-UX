import { combineReducers, configureStore } from "@reduxjs/toolkit";
import DarkReducer from "./reducers/DarkReducer";

export type DarkState = ReturnType<typeof DarkReducer>;

export type RootState = {
  dark: DarkState;
};

const RootReducer = combineReducers({
  dark: DarkReducer,
});

export const store = configureStore({
  reducer: RootReducer,
});
