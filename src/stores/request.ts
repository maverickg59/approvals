import { createStore } from "zustand/vanilla";
import { cellData, cellLabels } from "@/data/data";

type RequestState = {
  meeting_requests: MeetingRequestState;
  meeting_request_labels: string[];
};

type RequestActions = {
  update_meeting_request: (
    meeting_request: MeetingRequest,
    meeting_request_id: number
  ) => void;
};

export type RequestStore = RequestState & RequestActions;

export const defaultInitState: RequestState = {
  meeting_requests: cellData,
  meeting_request_labels: cellLabels,
};

function filterRequests(
  meetingRequests: MeetingRequestState,
  meetingRequestId: number
) {
  return meetingRequests.filter(
    (meeting) => meeting.meeting_request_id !== meetingRequestId
  );
}

export const createRequestStore = (
  initState: RequestState = defaultInitState
) => {
  return createStore<RequestStore>()((set) => ({
    ...initState,
    update_meeting_request: (meeting_request, meeting_request_id) => {
      set(({ meeting_requests }) => ({
        meeting_requests: [
          ...filterRequests(meeting_requests, meeting_request_id),
          meeting_request,
        ],
      }));
    },
  }));
};
