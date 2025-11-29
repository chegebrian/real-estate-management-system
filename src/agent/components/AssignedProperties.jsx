import React, { useState } from "react";

import { useProperty } from "../../contexts/PropertyContext";
import AssignedPropertyCard from "./AssignedPropertyCard";

function AssignedProperties() {
  const { properties } = useProperty();
  const [query, setQuery] = useState("");

  const filteredProperties = properties?.filter(
    (property) =>
      property.name.toLowerCase().includes(query?.toLowerCase()) ||
      property.location.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <>
      <h2 className="text-lg font-bold">Properties</h2>
      <form className="my-8">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by property name or location"
          className="w-full px-4 py-2 outline"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="grid grid-cols-3 gap-4 ">
        {filteredProperties?.map((property) => (
          <AssignedPropertyCard
            key={property.id}
            name={property.name}
            location={property.location}
            units={property.numOfUnits}
            price={property.price}
            image={property.image}
          />
        ))}
      </div>
    </>
  );
}

export default AssignedProperties;
