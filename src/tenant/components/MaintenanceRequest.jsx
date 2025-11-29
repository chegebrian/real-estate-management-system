import React, { useState } from "react";
import { useProperty } from "../../contexts/PropertyContext";

import MaintenanceRequestCard from "./MaintenanceRequestCard";

function MaintenanceRequest() {
  const {
    maintenanceRequestUrl,
    properties,
    addMaintenanceRequest,
    maintenanceRequests,
  } = useProperty();
  const [name, setName] = useState("");
  const [property, setProperty] = useState("");
  const [unit, setUnit] = useState("");
  const [issue, setIssue] = useState("");
  const [query, setQuery] = useState("");

  function handleMaintenanceRequest(e) {
    e.preventDefault();
    const newRequest = {
      name: name,
      property: property,
      unit: unit,
      issue: issue,
      status: "pending",
      date: new Date().toLocaleDateString(),
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRequest),
    };

    fetch(maintenanceRequestUrl, options)
      .then((res) => res.json())
      .then((data) => addMaintenanceRequest(data))
      .catch((err) => console.error(err));
  }
  const availableProperties = [...new Set(properties?.map((p) => p.name))];

  const filteredRequest = maintenanceRequests?.filter((property) =>
    property.issue.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <div>
      <h2 className="text-lg font-bold mb-8">Maintenance Requests</h2>
      <form
        onSubmit={handleMaintenanceRequest}
        className="shadow-lg p-4 rounded-md grid grid-cols-1 gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="property">Property:</label>

            <select
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Property
              </option>

              {availableProperties?.map((availableProperty, index) => (
                <option value={availableProperty} key={index}>
                  {availableProperty}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="unit">Unit:</label>
            <input
              type="unit"
              name="unit"
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="issue">Issue:</label>
            <input
              type="issue"
              name="issue"
              id="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-md bg-green-600 px-4 py-2"
        >
          Add Maintenance Request
        </button>
      </form>
      <form className="mt-8">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by issue"
          className="w-full px-4 py-2 outline"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {filteredRequest?.map((request) => (
          <MaintenanceRequestCard
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
    </div>
  );
}

export default MaintenanceRequest;
