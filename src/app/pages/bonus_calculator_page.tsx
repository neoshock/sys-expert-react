'use client'
import React, { useState } from 'react';



const BonusCalculatorPage = () => {
    const [age, setAge] = useState<string>("");
    const [yearsOfService, setYearsOfService] = useState<string>("");
    const [currentSalary, setCurrentSalary] = useState<string>("");
    const [bonus, setBonus] = useState<number>(0.0);


    const calculateBonus = () => {
        const actualAge = age === "" ? 0 : Number(age);
        const actualYearsOfService = yearsOfService === "" ? 0 : Number(yearsOfService);
        const actualCurrentSalary = currentSalary === "" ? 0 : Number(currentSalary);

        if (actualAge < 50 || actualYearsOfService < 5) {
            setBonus(0);
            return;
        }

        let bonusPercentage = 0;
        if (actualYearsOfService <= 10) {
            bonusPercentage = 0.20;
        } else if (actualYearsOfService <= 15) {
            bonusPercentage = 0.30;
        } else if (actualYearsOfService <= 20) {
            bonusPercentage = 0.40;
        } else if (actualYearsOfService <= 25) {
            bonusPercentage = 0.50;
        } else {
            bonusPercentage = 1.0;
        }

        setBonus(actualCurrentSalary * bonusPercentage);
    };

    return (
        <div className="bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-6">Calculadora de Bonos</h1>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Edad:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={
                            (e) => setAge(e.target.value)
                        }
                        className="p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Años de Servicio:</label>
                    <input
                        type="number"
                        value={yearsOfService}
                        onChange={
                            (e) => setYearsOfService(e.target.value)
                        }
                        className="p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Salario Actual ($):</label>
                    <input
                        type="number"
                        value={currentSalary}
                        onChange={
                            (e) => setCurrentSalary(e.target.value)
                        }
                        className="p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <button
                    onClick={calculateBonus}
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                >
                    Calcular Bono
                </button>
                <div className="mt-4">Tu bono es: <span className="font-semibold">${bonus}</span></div>
            </div>
        </div>
    );

}

export default BonusCalculatorPage