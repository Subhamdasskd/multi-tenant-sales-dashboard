export interface CallLog {
  id: string;
  leadName: string;
  dateTime: string;
  duration: string;
  outcome: string;
}

export const callLogsByTenant: Record<string, CallLog[]> = {
  orgA: [
    {
      id: "1",
      leadName: "Rohit Sharma",
      dateTime: "2026-01-16 10:30 AM",
      duration: "5 min",
      outcome: "Interested",
    },
    {
      id: "2",
      leadName: "Anita Verma",
      dateTime: "2026-01-15 02:15 PM",
      duration: "3 min",
      outcome: "Follow-up required",
    },
  ],
  orgB: [
    {
      id: "3",
      leadName: "Aman Gupta",
      dateTime: "2026-01-14 11:00 AM",
      duration: "7 min",
      outcome: "Converted",
    },
  ],
};
