import React, { useState } from "react";
import { useProperty } from "../../contexts/PropertyContext";
import TenantCard from "./TenantCard";

function Tenants() {
  const { tenants, tenantUrl, addNewTenant, properties } = useProperty();

  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState("");
  const [property, setProperty] = useState("");
  const [unit, setUnit] = useState("");
  const [query, setQuery] = useState("");

  const availableProperties = [...new Set(properties?.map((p) => p.name))];
  console.log(availableProperties);

  function handleAddAgent(e) {
    e.preventDefault();

    const newTenant = {
      firstName: fName,
      lastName: lName,
      email,
      phone: tel,
      profileImage: image,
      property,
      unit,
    };

    fetch(tenantUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTenant),
    })
      .then((res) => res.json())
      .then((data) => {
        addNewTenant(data);
        console.log(data);

        // Reset the form
        setFname("");
        setLname("");
        setEmail("");
        setTel("");
        setImage("");
        setProperty("");
        setUnit("");
      })
      .catch(console.error);
  }

  const filteredTenants = tenants?.filter(
    (agent) =>
      agent.firstName.toLowerCase().includes(query?.toLowerCase()) ||
      agent.lastName.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-lg font-bold mb-8">Tenants</h2>

      <form
        onSubmit={handleAddAgent}
        className="shadow-lg p-4 rounded-md grid grid-cols-1 gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fName">First Name:</label>
            <input
              type="text"
              id="fName"
              value={fName}
              onChange={(e) => setFname(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="lName">Last Name:</label>
            <input
              type="text"
              id="lName"
              value={lName}
              onChange={(e) => setLname(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="tel">Tel:</label>
            <input
              type="tel"
              id="tel"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
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

          <div>
            <label htmlFor="unit">Unit:</label>
            <input
              type="text"
              id="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer rounded-md bg-green-600 px-4 py-2"
        >
          Add Tenant
        </button>
      </form>
      <form className="mt-8">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by name"
          className="w-full px-4 py-2 outline"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {filteredTenants?.map((tenant) => (
          <TenantCard
            fName={tenant.firstName}
            lName={tenant.lastName}
            image={tenant.profileImage}
            property={tenant.property}
            unit={tenant.unit}
            key={tenant.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Tenants;
