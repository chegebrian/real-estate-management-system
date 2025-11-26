import React from "react";
import { useProperty } from "../../contexts/PropertyContext";

function AgentList() {
  const { agents } = useProperty();
  console.log(agents);

  return <div>AgentList</div>;
}

export default AgentList;
