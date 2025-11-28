import React from "react";
import MaintenanceCard from "./MaintenanceCard";

function Maintenance() {
  const requests = [
    {
      id: 1,
      name: "milly",
      property: "Roses",
      unit: "r1",
      issue: "Leaking faucet",
      status: "Pending",
      date: "2025-11-28",
    },
    {
      id: 2,
      name: "Derik",
      property: "Lilies",
      unit: "l1",
      issue: "Broken window",
      status: "In Progress",
      date: "2024-01-15",
    },
    {
      id: 3,
      name: "Brian",
      property: "Sunflower",
      unit: "s1",
      issue: "HVAC not working",
      status: "Completed",
      date: "2024-01-20",
    },
  ];
  return (
    <>
      <h2 className="text-lg font-bold mb-8">Maintenance Request</h2>
      <div className="grid grid-cols-3 gap-4">
        {requests?.map((request) => (
          <MaintenanceCard
            key={request.id}
            name={request.name}
            property={request.property}
            unit={request.unit}
            date={request.date}
            issue={request.issue}
            status={request.status}
          />
        ))}
      </div>
    </>
  );
}

export default Maintenance;
