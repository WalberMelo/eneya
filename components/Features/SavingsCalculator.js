import { useState } from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";

export const SavingsCalculator = () => {
    const [squareMeters, setSquareMeters] = useState("");
    const [waterSavingsLiters, setWaterSavingsLiters] = useState(0);
    const [waterSavingsEuros, setWaterSavingsEuros] = useState(0);

    const waterLitersPerSquareMeterPerYear = 1800; // Example: 1800 liters of water saved per m² per year
    const euroPerLiter = 0.002; // Example: 0.002€ per liter of water

    const handleSquareMetersChange = (e) => {
        const value = e.target.value;

        // Ensure only numeric input is allowed
        if (!isNaN(value)) {
            setSquareMeters(value);

            // Calculate water savings
            const savingsLiters = value * waterLitersPerSquareMeterPerYear;
            setWaterSavingsLiters(savingsLiters);

            // Calculate monetary savings
            const savingsEuros = savingsLiters * euroPerLiter;
            setWaterSavingsEuros(savingsEuros.toFixed(2));
        }
    };

    return (
        <div className="w-full max-w-md px-4">
            {/* Input for square meters */}
            <label className="text-sm font-medium">
                ¿Cuánto podrías ahorrar con césped artificial? Indica los m² de
                tu espacio:
            </label>
            <input
                type="text"
                value={squareMeters}
                onChange={handleSquareMetersChange}
                placeholder="Introduce los m²"
                className={clsx(
                    "mt-2 mb-3 block w-full rounded-lg border-none py-1.5 px-3 text-sm",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
            />

            {/* Display results */}
            <p className="text-sm mt-4 flex items-center">
                <Icon
                    icon="ion:water-outline"
                    width="1.2rem"
                    height="1.2rem"
                    className="mr-2"
                />
                <strong>Ahorro de agua en litros/año:</strong>{" "}
                {waterSavingsLiters} litros
            </p>
            <p className="text-sm mt-2 flex items-center">
                <Icon
                    icon="ic:round-euro"
                    width="1.2rem"
                    height="1.2rem"
                    className="mr-2"
                />
                <strong>Ahorro de agua en €/año:</strong> {waterSavingsEuros}€
            </p>
        </div>
    );
};
