import React, { useState } from "react";
import { useProperty } from "../../contexts/PropertyContext";

function PropertyModal({ property, onClose }) {
  const { propertyUrl, setProperties } = useProperty();
  const { id } = property;
  const [name, setName] = useState(property.name);
  const [location, setLocation] = useState(property.location);
  const [price, setPrice] = useState(property.price);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedAgent = {
      name: name,
      location: location,
      price: price,
    };

    const option = {
      method: "PATCH",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAgent),
    };

    fetch(`${propertyUrl}/${id}`, option)
      .then((res) => res.json())
      .then((data) =>
        setProperties((properties) =>
          properties?.map((property) =>
            property.id === id ? { ...property, ...data } : property
          )
        )
      );

    onClose();
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Edit Agent</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="border rounded px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Property Name"
          />

          <input
            className="border rounded px-2 py-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Property Location"
          />

          <input
            className="border rounded px-2 py-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PropertyModal;
