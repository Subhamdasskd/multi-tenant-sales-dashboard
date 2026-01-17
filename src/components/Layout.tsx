import { NavLink } from "react-router-dom";
import { useTenant, type Tenant } from "../contexts/TenantContext";
import { useAuth, type Role } from "../contexts/AuthContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { tenant, switchTenant } = useTenant();
  const { role, loginAs } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            Multi-Tenant Sales Dashboard
          </h1>

          <div className="flex gap-6">
            {/* Tenant */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Tenant</span>
              {["orgA", "orgB"].map((t) => (
                <button
                  key={t}
                  onClick={() => switchTenant(t as Tenant)}
                  className={`px-3 py-1 rounded text-sm transition ${
                    tenant === t
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {t === "orgA" ? "Org A" : "Org B"}
                </button>
              ))}
            </div>

            {/* Role */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Role</span>
              {["Admin", "Agent"].map((r) => (
                <button
                  key={r}
                  onClick={() => loginAs(r as Role)}
                  className={`px-3 py-1 rounded text-sm transition ${
                    role === r
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-6xl mx-auto flex gap-8 px-6 py-3">
          {[
            { to: "/", label: "Dashboard" },
            { to: "/leads", label: "Leads" },
            { to: "/calls", label: "Call Logs" },
            { to: "/settings", label: "Settings" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-500"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
