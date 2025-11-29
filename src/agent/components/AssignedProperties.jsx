import React from "react";
import PropertyCard from "../../admin/components/PropertyCard";
import { useProperty } from "../../contexts/PropertyContext";
import AssignedPropertyCard from "./AssignedPropertyCard";

function AssignedProperties() {
  const { properties } = useProperty();
  return (
    <>
      <h2 className="text-lg font-bold mb-8">Properties</h2>
      <div className="grid grid-cols-3 gap-4 ">
        {properties?.map((property) => (
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
