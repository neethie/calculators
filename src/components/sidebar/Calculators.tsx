import { CalculatorType } from "./calculatorsTypes";

import { TbNumbers } from "react-icons/tb";
import { MdOutlineAttachMoney } from "react-icons/md";

import { useAppStore } from "../../store/useAppStore";
import clsx from "clsx";

type CalculatorProps = {
    id: number;
};

export default function Calculators({ id }: CalculatorProps) {
    const { calculatorSelected, setCalculatorSelected } = useAppStore();

    const getIconById = () => {
        switch (id) {
            case CalculatorType.Normal:
                return <TbNumbers className="h-12 w-12" />;
            case CalculatorType.Currencies:
                return <MdOutlineAttachMoney className="h-12 w-12" />;
            default:
                return <TbNumbers />;
        }
    };

    const handleClick = () => {
        setCalculatorSelected(id);
    };

    return (
        <button
            onClick={handleClick}
            className={clsx(
                "h-max w-max p-2 rounded-md hover:scale-105 transition-all",
                calculatorSelected === id
                    ? "bg-blue-selectedSecondary"
                    : "bg-blue-noSelectedSecondary"
            )}
        >
            {getIconById()}
        </button>
    );
}
