import React, { useState } from "react";
import { useProperty } from "../../contexts/PropertyContext";

function EditAgentModal({ agent, onClose }) {
  const { agentUrl, setAgents } = useProperty();
  const { id } = agent;
  const [fName, setFName] = useState(agent.firstName);
  const [lName, setLName] = useState(agent.lastName);
  const [email, setEmail] = useState(agent.email);

  function handleSubmit(e) {
    e.preventDefault();
    const updatedAgent = {
      firstName: fName,
      lastName: lName,
      email: email,
    };

    const option = {
      method: "PATCH",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAgent),
    };

    fetch(`${agentUrl}/${id}`, option)
      .then((res) => res.json())
      .then((data) =>
        setAgents((agents) =>
          agents?.map((agent) =>
            agent.id === id ? { ...agent, ...data } : agent
          )
        )
      );

    onClose();
  }
  return (
    <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl">
      <h2 className="text-xl font-semibold mb-4">Edit Agent</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border rounded px-2 py-1"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          placeholder="First Name"
        />

        <input
          className="border rounded px-2 py-1"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          placeholder="Last Name"
        />

        <input
          className="border rounded px-2 py-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
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
  );
}

export default EditAgentModal;
