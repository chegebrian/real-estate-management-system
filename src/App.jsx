import { BrowserRouter, Route, Routes } from "react-router";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />}>
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
          <Route path="/AgentDashboard" element={<AgentDashboard />}>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
