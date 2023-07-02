import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { StoreDispatch, RootState } from "./store";

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch = () => useDispatch<StoreDispatch>();
