export type LeadStatus = "New" | "Contacted" | "Converted";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  status: LeadStatus;
}

export const leadsByTenant: Record<string, Lead[]> = {
  orgA: [
    { id: "1", name: "Rohit Sharma", phone: "9876543210", status: "New" },
    { id: "2", name: "Anita Verma", phone: "9876501234", status: "Contacted" },
  ],
  orgB: [
    { id: "3", name: "Aman Gupta", phone: "9123456789", status: "Converted" },
    { id: "4", name: "Neha Singh", phone: "9988776655", status: "New" },
  ],
};
