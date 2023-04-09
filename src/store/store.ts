import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PersonSlice } from "./features/personSlice";
import logger from 'redux-logger';

export const store= configureStore({
    reducer: {
        person:PersonSlice.reducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector