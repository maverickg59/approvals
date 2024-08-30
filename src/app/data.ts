export const cellLabels = [
  "ID",
  "Requester",
  "Approver",
  "Classified",
  "Sensitive",
  "Status",
];
export const cellData = [
  {
    meeting_request_id: 1,
    requester_first_name: "Chris",
    requester_last_name: "W.",
    participants: {
      internal: [""],
      external: [""],
    },
    is_recurring: false,
    approver_first_name: "Mark",
    approver_last_name: "S.",
    approval_status: "pending",
    start_date: "",
    end_date: "",
    meeting_narrative: "",
    meeting_type: "",
    meeting_purpose: "",
    meeting_disclosure: {
      classified: false,
      sensitive: true,
    },
  },
  {
    meeting_request_id: 2,
    requester_first_name: "Janet",
    requester_last_name: "H.",
    participants: {
      internal: [""],
      external: [""],
    },
    approver_first_name: "Mark",
    approver_last_name: "S.",
    approval_status: "incomplete",
    start_date: "",
    end_date: "",
    meeting_narrative: "",
    meeting_type: "",
    meeting_purpose: "",
    meeting_disclosure: {
      classified: true,
      sensitive: false,
    },
  },
  {
    meeting_request_id: 3,
    requester_first_name: "Janet",
    requester_last_name: "H.",
    participants: {
      internal: [""],
      external: [""],
    },
    approver_first_name: "Bill",
    approver_last_name: "J.",
    approval_status: "approved",
    start_date: "",
    end_date: "",
    meeting_narrative: "",
    meeting_type: "",
    meeting_purpose: "",
    meeting_disclosure: {
      classified: false,
      sensitive: false,
    },
  },
  {
    meeting_request_id: 4,
    requester_first_name: "Axel",
    requester_last_name: "R.",
    participants: {
      internal: [""],
      external: [""],
    },
    approver_first_name: "Mark",
    approver_last_name: "S.",
    approval_status: "rejected",
    start_date: "",
    end_date: "",
    meeting_narrative: "",
    meeting_type: "",
    meeting_purpose: "",
    meeting_disclosure: {
      classified: true,
      sensitive: true,
    },
  },
  {
    meeting_request_id: 5,
    requester_first_name: "Cameron",
    requester_last_name: "K.",
    participants: {
      internal: [""],
      external: [""],
    },
    approver_first_name: "Mark",
    approver_last_name: "S.",
    approval_status: "incomplete",
    start_date: "",
    end_date: "",
    meeting_narrative: "",
    meeting_type: "",
    meeting_purpose: "",
    meeting_disclosure: {
      classified: false,
      sensitive: true,
    },
  },
  {
    meeting_request_id: 6,
    requester_first_name: "Axel",
    requester_last_name: "R.",
    participants: {
      internal: [""],
      external: [""],
    },
    approver_first_name: "Mark",
    approver_last_name: "S.",
    approval_status: "approved",
    start_date: "",
    end_date: "",
    meeting_narrative: "",
    meeting_type: "",
    meeting_purpose: "",
    meeting_disclosure: {
      classified: true,
      sensitive: true,
    },
  },
];
