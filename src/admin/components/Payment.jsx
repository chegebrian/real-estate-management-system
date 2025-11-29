import React from "react";

function Payment() {
  return (
    <>
      <h2 className="text-lg font-bold mb-8">Payment</h2>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              Tenant Name
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              Payment Amount
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              Payment Date
            </th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2">Milly</td>
            <td className="px-4 py-2">1200</td>
            <td className="px-4 py-2">12/12/25</td>
            <td className="px-4 py-2">
              <span className="px-2 py-1 text-sm rounded-md bg-yellow-100 text-yellow-700">
                pending
              </span>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2">Derick</td>
            <td className="px-4 py-2">3000</td>
            <td className="px-4 py-2">28/11/25</td>
            <td className="px-4 py-2">
              <span className="px-2 py-1 text-sm rounded-md bg-green-100 text-green-700">
                paid
              </span>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2">Brian</td>
            <td className="px-4 py-2">2000</td>
            <td className="px-4 py-2">26/11/25</td>
            <td className="px-4 py-2">
              <span className="px-2 py-1 text-sm rounded-md bg-red-100 text-red-700">
                overdue
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Payment;
