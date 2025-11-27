import React from "react";
import AgentList from "../components/AgentList";
import TenantList from "../components/TenantList";
import PropertyList from "../components/PropertyList";

function AdminDashboard() {
  return (
    <div>
      <AgentList />
      {/* <h2>Tenants</h2> */}
      {/* <TenantList />
      <h2>Properties</h2> */}
      <PropertyList />
    </div>
  );
}

export default AdminDashboard;
