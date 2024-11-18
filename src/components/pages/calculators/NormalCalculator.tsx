import { useAppStore } from "../../../store/useAppStore";
import Button from "./normal/Button";

import { ButtonType } from "./normal/normal-button-types";

export default function NormalCalculator() {
    const buttons = [
        ButtonType.AC,
        ButtonType.Percentaje,
        ButtonType.PlusMinus,
        ButtonType.Division,
        7,
        8,
        9,
        ButtonType.Times,
        4,
        5,
        6,
        ButtonType.Minus,
        1,
        2,
        3,
        ButtonType.Plus,
        ButtonType.Zero,
        ButtonType.Dot,
        ButtonType.Equal,
    ];

    const { number, result, error } = useAppStore();

    return (
        <>
            <p className="text-right">{result ? result : number}</p>

            <div className="gap-x-2 gap-y-2 grid grid-cols-4">
                {buttons.map((button) => (
                    <Button key={button} value={button} />
                ))}
            </div>

            {error.length > 0 && (
                <p className="text-sm text-center absolute">{error}</p>
            )}
        </>
    );
}
