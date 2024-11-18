import { create } from "zustand";
import { createUISlice, UISlice } from "./useUIStore";
import { devtools } from "zustand/middleware";
import { createNCSlice, NCSlice } from "./useNCStore";

type AppSlice = UISlice & NCSlice;

export const useAppStore = create<AppSlice>()(
    devtools((...a) => ({
        ...createUISlice(...a),
        ...createNCSlice(...a),
    }))
);
