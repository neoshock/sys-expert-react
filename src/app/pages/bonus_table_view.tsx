'use client'

const BonusTableView = () => {
    return (
        <div className="p-6 flex flex-col items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Duración del empleo</th>
                            <th className="px-4 py-2">Bonificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2 text-center">&lt;5 años</td>
                            <td className="border px-4 py-2 text-center">Sin bonificación</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-4 py-2 text-center">5-10 años</td>
                            <td className="border px-4 py-2 text-center">20% del salario anual actual</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center">11-15 años</td>
                            <td className="border px-4 py-2 text-center">30% del salario anual actual</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-4 py-2 text-center">16-20 años</td>
                            <td className="border px-4 py-2 text-center">40% del salario anual actual</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 text-center">21-25 años</td>
                            <td className="border px-4 py-2 text-center">50% del salario anual actual</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border px-4 py-2 text-center">26 o más años</td>
                            <td className="border px-4 py-2 text-center">100% del salario anual actual</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default BonusTableView;