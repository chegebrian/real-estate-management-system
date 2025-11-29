import React from "react";
import MaintenanceCard from "./MaintenanceCard";
import { useProperty } from "../../contexts/PropertyContext";

function Maintenance() {
  const { maintenanceRequests } = useProperty();
  return (
    <>
      <h2 className="text-lg font-bold mb-8">Maintenance Request</h2>
      <div className="grid grid-cols-3 gap-4">
        {maintenanceRequests?.map((request) => (
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
