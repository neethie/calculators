import clsx from "clsx";
import { ButtonInfo, ButtonType } from "./normal-button-types";
import { useAppStore } from "../../../../store/useAppStore";

type ButtonProps = {
    value: number;
};

export default function Button({ value }: ButtonProps) {
    let text = "";
    if (0 <= value && value <= 9) text = value.toString();
    else {
        const button = ButtonInfo.find((button) => button.id === value);
        text = button ? button.value : "";
    }

    const handleClick = () => {
        setButtonClicked(value);
    };

    const { setButtonClicked } = useAppStore();
    return (
        <button
            onClick={handleClick}
            className={clsx(
                "bg-blue-noSelected h-12 min-w-12 rounded-md hover:bg-blue-selectedSecondary text-4xl",
                {
                    "col-span-2": value === ButtonType.Zero,
                    "text-xl": value === ButtonType.AC,
                }
            )}
        >
            <p>{text}</p>
        </button>
    );
}
