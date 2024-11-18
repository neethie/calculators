import { useAppStore } from "../../store/useAppStore";
import { CalculatorType } from "../sidebar/calculatorsTypes";
import CurrenciesCalculator from "./calculators/CurrenciesCalculator";
import NormalCalculator from "./calculators/NormalCalculator";

export default function Calculator() {
    const { calculatorSelected } = useAppStore();
    const showCalculator = () => {
        switch (calculatorSelected) {
            case CalculatorType.Normal:
                return <NormalCalculator />;
            case CalculatorType.Currencies:
                return <CurrenciesCalculator />;
        }
    };
    return (
        <div className="mx-auto my-auto text-4xl space-y-2 p-12 min-h-screen">
            {showCalculator()}
        </div>
    );
}
