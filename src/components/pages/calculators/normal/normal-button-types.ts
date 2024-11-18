export enum ButtonType {
    Zero = 0,
    AC = 11,
    Percentaje = 12,
    Times = 13,
    Division = 14,
    Minus = 15,
    Plus = 16,
    Equal = 17,
    Dot = 18,
    PlusMinus = 19,
}

export const ButtonInfo = [
    {
        id: ButtonType.Zero,
        value: "0",
    },
    {
        id: ButtonType.AC,
        value: "AC",
    },
    {
        id: ButtonType.Percentaje,
        value: "%",
    },
    {
        id: ButtonType.Times,
        value: "×",
    },
    {
        id: ButtonType.Division,
        value: "÷",
    },
    {
        id: ButtonType.Minus,
        value: "-",
    },
    {
        id: ButtonType.Plus,
        value: "+",
    },
    {
        id: ButtonType.Equal,
        value: "=",
    },
    {
        id: ButtonType.Dot,
        value: ".",
    },
    {
        id: ButtonType.PlusMinus,
        value: "±",
    },
];
