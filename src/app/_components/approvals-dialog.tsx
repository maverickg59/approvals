"use client";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/Atoms/dialog";
import { Button } from "@/components/Atoms/button";
import { Field, Label } from "@/components/Atoms/fieldset";
import { Select } from "@/components/Atoms/select";
import { useRequestStore } from "@/providers/request-provider";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/Atoms/description-list";

type Props = {
  setIsOpen: (arg: boolean) => void;
  isOpen: boolean;
  rowIndex: number;
};

export const ApprovalsDialog = ({ setIsOpen, isOpen, rowIndex }: Props) => {
  const { meeting_requests, update_meeting } = useRequestStore(
    (state) => state
  );

  const meeting = meeting_requests[rowIndex];

  const {
    meeting_request_id,
    requester_first_name,
    requester_last_name,
    participants: { internal, external },
    is_recurring,
    approver_first_name,
    approver_last_name,
    approval_status,
    start_date,
    end_date,
    meeting_narrative,
    meeting_type,
    meeting_purpose,
    meeting_disclosure: { sensitive, classified },
  } = meeting;

  const [selectApprovalStatus, setSelectApprovalStatus] =
    useState(approval_status);

  return (
    <Dialog size="5xl" open={isOpen} onClose={setIsOpen}>
      <DialogTitle>Meeting Request</DialogTitle>
      <DialogDescription>
        This dialog is used to display and allow for approvals
      </DialogDescription>
      <DialogBody className="flex justify-between">
        <DescriptionList className="w-1/2">
          <DescriptionTerm>Meeting Request ID</DescriptionTerm>
          <DescriptionDetails>{meeting_request_id}</DescriptionDetails>
          <DescriptionTerm>Requester</DescriptionTerm>
          <DescriptionDetails>{`${requester_first_name} ${requester_last_name}`}</DescriptionDetails>
          <DescriptionTerm>Start Date</DescriptionTerm>
          <DescriptionDetails>{start_date}</DescriptionDetails>
          <DescriptionTerm>External Participants</DescriptionTerm>
          <DescriptionDetails>
            {external.map((participant) => (
              <span key={participant}>{participant}</span>
            ))}
          </DescriptionDetails>
          <DescriptionTerm>Meeting Type</DescriptionTerm>
          <DescriptionDetails>{meeting_type}</DescriptionDetails>
          <DescriptionTerm>Sensitive</DescriptionTerm>
          <DescriptionDetails>
            {sensitive ? "sensitive data" : "no sensitive data"}
          </DescriptionDetails>
          <DescriptionTerm>Meeting Narrative</DescriptionTerm>
          <DescriptionDetails>{meeting_narrative}</DescriptionDetails>
        </DescriptionList>
        <DescriptionList className="w-1/2">
          <DescriptionTerm>Is Recurring</DescriptionTerm>
          <DescriptionDetails>
            {is_recurring ? "true" : "false"}
          </DescriptionDetails>
          <DescriptionTerm>Approver</DescriptionTerm>
          <DescriptionDetails>
            {`${approver_first_name} ${approver_last_name}`}
          </DescriptionDetails>
          <DescriptionTerm>End Date</DescriptionTerm>
          <DescriptionDetails>{end_date}</DescriptionDetails>
          <DescriptionTerm>Internal Participants</DescriptionTerm>
          <DescriptionDetails>
            {internal.map((participant) => (
              <span key={participant}>{`${participant}`}</span>
            ))}
          </DescriptionDetails>
          <DescriptionTerm>Meeting Purpose</DescriptionTerm>
          <DescriptionDetails>{meeting_purpose}</DescriptionDetails>
          <DescriptionTerm>Classified</DescriptionTerm>
          <DescriptionDetails>
            {classified ? "classified data" : "no classified data"}
          </DescriptionDetails>
          <DescriptionTerm>Approval Status</DescriptionTerm>
          <DescriptionDetails>{approval_status}</DescriptionDetails>
        </DescriptionList>
      </DialogBody>
      <DialogActions className="items-end justify-between">
        <Field>
          <Label>Approval Status</Label>
          <Select
            name="status"
            value={selectApprovalStatus}
            onChange={(e) => setSelectApprovalStatus(e.currentTarget.value)}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="incomplete">Incomplete</option>
            <option value="rejected">Rejected</option>
          </Select>
        </Field>
        <div className="items-end mt-8 flex flex-col-reverse gap-3 *:w-full sm:flex-row sm:*:w-auto">
          <Button onClick={() => setIsOpen(!isOpen)}>Cancel</Button>
          <Button
            color="dark"
            onClick={() => {
              // make our API call to update server side meeting state (mocked)
              const response = {
                ...meeting,
                approval_status: selectApprovalStatus,
              };
              // use the response to update zustand
              update_meeting(response, meeting_request_id);
              setIsOpen(!isOpen);
            }}
          >
            Update
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};
