import { useState } from "react";
import { leadsByTenant, type LeadStatus } from "../../data/leads";
import { useTenant } from "../../contexts/TenantContext";
import { useAuth } from "../../contexts/AuthContext";
import { leadStatusClasses } from "../../utils/statusColors";

const statuses: LeadStatus[] = ["New", "Contacted", "Converted"];

const LeadsList = () => {
  const { tenant } = useTenant();
  const { role } = useAuth();
  const [filter, setFilter] = useState<LeadStatus | "All">("All");

  const leads = leadsByTenant[tenant] || [];

  const filteredLeads =
    filter === "All"
      ? leads
      : leads.filter((lead) => lead.status === filter);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Leads</h2>

      {/* Filter */}
      <div className="mb-4">
        <label className="text-sm font-medium mr-2">Filter by status:</label>
        <select
          className="border rounded px-2 py-1 text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value as LeadStatus)}
        >
          <option value="All">All</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Leads List */}
      {filteredLeads.length === 0 ? (
        <p className="text-sm text-gray-500">No leads available.</p>
      ) : (
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="flex justify-between items-center p-4 border rounded-lg hover:shadow transition"
            >
              <div>
                <p className="font-semibold">{lead.name}</p>
                <p className="text-sm text-gray-500">{lead.phone}</p>
              </div>

              <div className="flex items-center gap-4">
                <span
  className={`text-xs px-3 py-1 rounded-full font-medium ${leadStatusClasses[lead.status]}`}
>
  {lead.status}
</span>


                {role === "Admin" && (
                  <button className="text-sm text-blue-600 hover:underline">
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeadsList;
