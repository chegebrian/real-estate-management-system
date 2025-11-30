import { createContext, useContext, useEffect, useState } from "react";

const property = createContext();
const agentUrl = "http://localhost:7000/agents";
const propertyUrl = "http://localhost:7000/propertyList";
const tenantUrl = "http://localhost:7000/tenants";
const maintenanceRequestUrl = "http://localhost:7000/maintenanceRequests";

function PropertContext({ children }) {
  // usestate to store initial data
  const [agents, setAgents] = useState([]);
  const [properties, setProperties] = useState([]);
  const [tenants, setTenants] = useState([]);
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);

  // useeffects to make fetch requests
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(agentUrl);
      const data = await response.json();
      setAgents(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(propertyUrl);
      const data = await response.json();
      setProperties(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(tenantUrl);
      const data = await response.json();
      setTenants(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(maintenanceRequestUrl);
      const data = await response.json();
      setMaintenanceRequests(data);
    }
    fetchData();
  }, []);

  // handler functions to push objects into the array

  function addNewAgent(newAgent) {
    setAgents([...agents, newAgent]);
  }
  function addNewProperty(newProperty) {
    setProperties([...properties, newProperty]);
  }
  function addNewTenant(newTenant) {
    setTenants([...tenants, newTenant]);
  }
  function addMaintenanceRequest(newMaintenanceRequest) {
    setMaintenanceRequests([...maintenanceRequests, newMaintenanceRequest]);
  }
  function handleDelete(id) {
    fetch(`${agentUrl}/${id}`, { method: "DELETE" }).then(() =>
      setAgents((agents) => agents?.filter((agent) => agent.id !== id))
    );
  }
  function handleDeleteProperty(id) {
    fetch(`${agentUrl}/${id}`, { method: "DELETE" }).then(() =>
      setAgents((agents) => agents?.filter((agent) => agent.id !== id))
    );
  }

  return (
    <property.Provider
      value={{
        agents,
        properties,
        handleDeleteProperty,
        tenants,
        agentUrl,
        addNewAgent,
        addNewProperty,
        propertyUrl,
        maintenanceRequests,
        tenantUrl,
        addNewTenant,
        maintenanceRequestUrl,
        addMaintenanceRequest,
        handleDelete,
        setAgents,
        setProperties,
      }}
    >
      {children}
    </property.Provider>
  );
}

function useProperty() {
  const context = useContext(property);
  if (context === undefined)
    throw new Error("you used the propertyContext outside of its provider");

  return context;
}

export { PropertContext, useProperty };
