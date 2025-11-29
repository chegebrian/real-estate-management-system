import React from "react";
import { NavLink, Outlet } from "react-router";

function TenantDashboard() {
  return (
    <div className="grid grid-cols-5 gap-8 p-6">
      <aside className="col-start-1 col-end-2">
        <ul className="grid grid-cols-1 gap-8">
          {/* <li>
            <NavLink to="/TenantDashboard/Tenants"></NavLink>
          </li> */}
          <li>
            <NavLink to="/TenantDashboard/Payments">Payment</NavLink>
          </li>
          <li>
            <NavLink to="/TenantDashboard/Maintenance">Maintenance</NavLink>
          </li>
          <li>
            <NavLink to="/TenantDashboard/Profile">Profile</NavLink>
          </li>
        </ul>
      </aside>
      <main className="col-start-2 col-end-6">
        <Outlet />
      </main>
    </div>
  );
}

export default TenantDashboard;
