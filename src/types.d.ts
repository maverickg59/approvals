type MeetingRequest = {
  meeting_request_id: number;
  requester_first_name: string;
  requester_last_name: string;
  participants: {
    internal: string[];
    external: string[];
  };
  is_recurring: boolean;
  approver_first_name: string;
  approver_last_name: string;
  approval_status: string;
  start_date: string;
  end_date: string;
  meeting_narrative: string;
  meeting_type: string;
  meeting_purpose: string;
  meeting_disclosure: {
    classified: boolean;
    sensitive: boolean;
  };
};

type MeetingRequestState = MeetingRequest[];

type MeetingRequestActions = {
  update_approval_status: (status: string, index: string) => void;
};
