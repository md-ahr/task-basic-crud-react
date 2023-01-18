import React from "react";

const Table = () => {
    return (
        <div className="mt-8 mx-auto w-full sm:w-[600px] overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            SL No
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Sectors
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b">
                        <td className="px-6 py-4">1</td>
                        <td className="px-6 py-4">ahr</td>
                        <td className="px-6 py-4">sdfds, sdfdsf</td>
                        <td className="px-6 py-4">
                            <a
                                href="#"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
