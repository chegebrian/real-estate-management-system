import React from "react";

function MaintenanceCard({ name, property, date, issue, unit, status }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg mb-2">{name}</h2>
      <p>
        <span className="font-semibold">Property:</span> {property}
      </p>
      <p>
        <span className="font-semibold">Unit:</span> {unit}
      </p>
      <p>
        <span className="font-semibold">Issue:</span> {issue}
      </p>
      <p>Status: {status}</p>
      <p>
        <span className="font-semibold">Date:</span> {date}
      </p>

      <div className="mt-4 flex gap-2">
        <button className="flex-1 py-2 rounded">Mark In Progress</button>
        <button className="flex-1 py-2 rounded border hover:bg-gray-100">
          Mark Completed
        </button>
      </div>
    </div>
  );
}

export default MaintenanceCard;
