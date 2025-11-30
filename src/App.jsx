import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import SignUp from "./SignUp";
import AdminDashboard from "./admin/pages/AdminDashboard";
import Login from "./Login";
import AgentList from "./admin/components/AgentList";
import PropertyList from "./admin/components/PropertyList";
import Payment from "./admin/components/Payment";
import Maintenance from "./admin/components/Maintenance";
import Tenants from "./agent/components/Tenants";
import AgentDashboard from "./agent/pages/AgentDashboard";
import AssignedProperties from "./agent/components/AssignedProperties";
import TenantDashboard from "./tenant/pages/TenantDashboard";
import MaintenanceRequest from "./tenant/components/MaintenanceRequest";
import Profile from "./tenant/components/Profile";
import Rent from "./tenant/components/Rent";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  function handleLoggedInUser(loggedUser) {
    setUser(loggedUser);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* LOGIN ROUTE */}
          <Route
            path="/"
            element={
              user ? (
                <Navigate to={`/${user.role}Dashboard`} />
              ) : (
                <Login onLogin={handleLoggedInUser} />
              )
            }
          />
          {/* admin routes */}
          <Route
            path="/AdminDashboard"
            element={
              user?.role === "admin" ? <AdminDashboard /> : <Navigate to="/" />
            }
          >
            <Route path="/AdminDashboard/Agents" element={<AgentList />} />
            <Route
              path="/AdminDashboard/Properties"
              element={<PropertyList />}
            />
            <Route path="/AdminDashboard/Payments" element={<Payment />} />
            <Route
              path="/AdminDashboard/Maintenance"
              element={<Maintenance />}
            />
          </Route>
          {/* agent routes */}
          <Route
            path="/AgentDashboard"
            element={
              user?.role === "agent" ? <AgentDashboard /> : <Navigate to="/" />
            }
          >
            <Route
              path="/AgentDashboard/Properties"
              element={<AssignedProperties />}
            />
            <Route path="/AgentDashboard/Tenants" element={<Tenants />} />
            <Route path="/AgentDashboard/Payments" element={<Payment />} />
            <Route
              path="/AgentDashboard/Maintenance"
              element={<Maintenance />}
            />
          </Route>
          {/* tenant routes */}
          <Route
            path="/TenantDashboard"
            element={
              user?.role === "tenant" ? (
                <TenantDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          >
            <Route path="/TenantDashboard/Payments" element={<Rent />} />
            <Route
              path="/TenantDashboard/Maintenance"
              element={<MaintenanceRequest />}
            />
            <Route path="/TenantDashboard/Profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
