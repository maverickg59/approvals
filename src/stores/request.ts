import { createStore } from "zustand/vanilla";
import { cellData, cellLabels } from "@/data/data";

type RequestState = {
  meeting_requests: MeetingRequestState;
  meeting_request_labels: string[];
};

type RequestActions = {
  update_meeting: (
    meeting_request: MeetingRequest,
    meeting_request_id: number
  ) => void;
};

export type RequestStore = RequestState & RequestActions;

export const defaultInitState: RequestState = {
  meeting_requests: cellData,
  meeting_request_labels: cellLabels,
};

export const createRequestStore = (
  initState: RequestState = defaultInitState
) => {
  return createStore<RequestStore>()((set) => ({
    ...initState,
    update_meeting: (meeting_request, meeting_request_id) => {
      set(({ meeting_requests }) => ({
        meeting_requests: [
          ...meeting_requests.filter(
            (meeting) => meeting.meeting_request_id !== meeting_request_id
          ),
          meeting_request,
        ],
      }));
    },
  }));
};
