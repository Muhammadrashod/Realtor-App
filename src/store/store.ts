import { configureStore } from "@reduxjs/toolkit";
import { saleApi } from "./API/saleApi";

export const store = configureStore({
  reducer: {
    [saleApi.reducerPath]: saleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([saleApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
