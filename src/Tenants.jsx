import React, { useState } from "react";
import { useProperty } from "./contexts/PropertyContext";
import TenantCard from "./TenantCard";

function Tenants() {
  const { tenants, tenantUrl, addNewTenant, availableProperties } =
    useProperty();

  console.log(availableProperties);

  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState("");
  const [property, setProperty] = useState("");
  const [unit, setUnit] = useState("");

  function handleChangeFname(e) {
    setFname(e.target.value);
  }
  function handleChangeLname(e) {
    setLname(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeTel(e) {
    setTel(e.target.value);
  }
  function handleChangeImage(e) {
    setImage(e.target.value);
  }
  function handleProperty(e) {
    setProperty(e.target.value);
  }
  function handleUnit(e) {
    setUnit(e.target.value);
  }

  let newAgent = {
    firstName: fName,
    lastName: lName,
    email: email,
    phone: tel,
    profileImage: image,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAgent),
  };
  function handleAddAgent(e) {
    e.preventDefault();
    fetch(tenantUrl, options)
      .then((res) => res.json())
      .then((data) => addNewTenant(data))
      .catch((err) => console.error(err));
  }

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
              name="fName"
              id="fName"
              value={fName}
              onChange={handleChangeFname}
              required
            />
          </div>
          <div>
            <label htmlFor="lName">Last Name:</label>
            <input
              type="text"
              name="lName"
              id="lName"
              value={lName}
              onChange={handleChangeLname}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div>
            <label htmlFor="tel">Tel:</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              value={tel}
              onChange={handleChangeTel}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="property">Property:</label>

            <select value={property} onChange={handleProperty} required>
              {availableProperties?.map((availableProperty) => (
                <option value={availableProperty} key={availableProperty}>
                  {availableProperty}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="tel">unit:</label>
            <input
              type="text"
              name="tel"
              id="tel"
              value={unit}
              onChange={handleUnit}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="image">Image:</label>
            <input
              type="text"
              name="image"
              id="image"
              value={image}
              onChange={handleChangeImage}
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
      <div className="grid grid-cols-3 gap-4 mt-8">
        {tenants?.map((tenant) => (
          <TenantCard
            key={tenant.id}
            fName={tenant.firstName}
            lName={tenant.lastName}
            image={tenant.profileImage}
            property={tenant.property}
            unit={tenant.unit}
          />
        ))}
      </div>
    </div>
  );
}

export default Tenants;
