import { createContext, useContext, useEffect, useState } from "react";

const property = createContext();
const agentUrl = "http://localhost:7000/agents";

function PropertContext({ children }) {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(agentUrl);
      const data = await response.json();
      setAgents(data);
    }
    fetchData();
  }, []);
  return <property.Provider value={{ agents }}>{children}</property.Provider>;
}

function useProperty() {
  const context = useContext(property);
  if (context === undefined)
    throw new Error("you used the propertyContext outside of its provider");

  return context;
}

export { PropertContext, useProperty };
