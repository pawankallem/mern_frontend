import { configureStore } from "@reduxjs/toolkit";
import itemReduce from "../features/itemsSlice";

export const store = configureStore({
  reducer: {
    item: itemReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
