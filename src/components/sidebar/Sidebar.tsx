import Calculators from "./Calculators";
import { CalculatorType } from "./calculatorsTypes";

export default function Sidebar() {
    return (
        <aside className="p-4 bg-blue-secondary min-h-screen text-center">
            <h2 className="text-3xl my-2">CalcApp</h2>
            <p className="text-sm">Elige la calculadora a usar</p>
            <div className=" flex justify-center gap-4 m-4">
                <Calculators id={CalculatorType.Normal} />
                <Calculators id={CalculatorType.Currencies} />
            </div>
        </aside>
    );
}
