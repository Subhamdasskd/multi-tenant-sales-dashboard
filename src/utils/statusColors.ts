import type { LeadStatus } from "../data/leads";

export const leadStatusClasses: Record<LeadStatus, string> = {
  New: "bg-blue-100 text-blue-700",
  Contacted: "bg-yellow-100 text-yellow-700",
  Converted: "bg-green-100 text-green-700",
};
