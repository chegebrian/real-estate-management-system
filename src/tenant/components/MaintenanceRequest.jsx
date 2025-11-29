import React from "react";

function MaintenanceRequest() {
  function handleMaintenanceRequest() {}
  return (
    <div>
      <h2 className="text-lg font-bold mb-8">Agents</h2>
      <form
        onSubmit={handleMaintenanceRequest}
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
          Add Maintenance Request
        </button>
      </form>
    </div>
  );
}

export default MaintenanceRequest;
