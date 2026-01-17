import { callLogsByTenant } from "../../data/callLogs";
import { useTenant } from "../../contexts/TenantContext";

const CallLogsList = () => {
  const { tenant } = useTenant();
  const callLogs = callLogsByTenant[tenant] || [];

  return (
    <div>
  <h2 className="text-lg font-semibold mb-4">Call Logs</h2>

  {callLogs.length === 0 ? (
    <p className="text-sm text-gray-500">No call logs available.</p>
  ) : (
    <div className="space-y-4">
      {callLogs.map((log) => (
        <div
          key={log.id}
          className="p-4 border rounded-lg hover:shadow transition"
        >
          <div className="flex justify-between items-center">
            <p className="font-semibold">{log.leadName}</p>
            <span className="text-xs text-gray-500">{log.dateTime}</span>
          </div>

          <div className="flex gap-4 mt-2 text-sm text-gray-600">
            <span>⏱ {log.duration}</span>
            <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs font-medium">
              {log.outcome}
            </span>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default CallLogsList;
