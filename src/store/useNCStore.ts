import { StateCreator } from "zustand";
import { ButtonType } from "../components/pages/calculators/normal/normal-button-types";

const initialState = {
    number: 0,
    result: 0,
    newNumber: 0,
    operation: 0,
    error: "",
};

export type NCSlice = {
    number: number;
    newNumber: number;
    result: number;

    operation: number;
    error: string;
    setButtonClicked: (value: number) => void;
};

export const createNCSlice: StateCreator<NCSlice, [], [], NCSlice> = (
    set,
    get
) => ({
    number: 0,
    newNumber: 0,
    result: 0,

    operation: 0,
    error: "",
    setButtonClicked: (value: number) => {
        if (value < 10) {
            if (get().number < 9999999999 && get().number > -9999999999) {
                set((state) => ({
                    number:
                        state.number === 0 ? value : state.number * 10 + value,
                    result: 0,
                }));
            }
        }

        switch (value) {
            case ButtonType.AC: {
                set(() => initialState);
                break;
            }
            case ButtonType.PlusMinus: {
                set((state) => ({
                    number: state.number * -1,
                }));
                break;
            }
            case ButtonType.Equal: {
                const result = getResult(
                    get().operation,
                    get().number,
                    get().newNumber
                );
                set(() => ({
                    result,
                    number: result,
                    newNumber: 0,
                    operation: 0,
                }));
                break;
            }
            case ButtonType.Percentaje: {
                set((state) => ({
                    number: state.number / 100,
                }));
                break;
            }
            case ButtonType.Division:
            case ButtonType.Times:
            case ButtonType.Minus:
            case ButtonType.Plus: {
                set((state) => ({
                    operation: value,
                    newNumber: state.number,
                    number: 0,
                }));
                break;
            }
        }
    },
});

function getResult(operation: number, number: number, newNumber: number) {
    switch (operation) {
        case ButtonType.Division: {
            return newNumber / number;
        }
        case ButtonType.Times: {
            return newNumber * number;
        }
        case ButtonType.Minus: {
            return newNumber - number;
        }
        case ButtonType.Plus: {
            return newNumber + number;
        }
        default: {
            return number;
        }
    }
}
