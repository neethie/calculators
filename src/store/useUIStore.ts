import { StateCreator } from "zustand";

export type UISlice = {
    calculatorSelected: number;
    setCalculatorSelected: (id: number) => void;
};

export const createUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
    calculatorSelected: 1,
    setCalculatorSelected: (id) => set({ calculatorSelected: id }),
});
