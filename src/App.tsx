import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./components/Layout";
import Protected from "./components/Protected";

// Lazy-loaded pages (optimization)
const Dashboard = lazy(() => import("./pages/Dashboard"));
const LeadsPage = lazy(() => import("./pages/LeadsPage"));
const CallLogsPage = lazy(() => import("./pages/CallLogsPage"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/calls" element={<CallLogsPage />} />
          <Route
            path="/settings"
            element={
              <Protected allowedRoles={["Admin"]}>
                <Settings />
              </Protected>
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
