"use client";
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

type Props = {
  setStatus: (e: string) => void;
  setIsOpen: (arg: boolean) => void;
  isOpen: boolean;
  status: string;
};

export const ApprovalsDialog = ({
  setStatus,
  setIsOpen,
  isOpen,
  status,
}: Props) => {
  return (
    <Dialog size="5xl" open={isOpen} onClose={setIsOpen}>
      <DialogTitle>Meeting Request</DialogTitle>
      <DialogDescription>
        This dialog is used to display and allow for approvals
      </DialogDescription>
      <DialogBody>
        Meeting Justification
        <br />
        Table
      </DialogBody>
      <DialogActions className="items-end justify-between">
        <Field>
          <Label>Approval Status</Label>
          <Select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.currentTarget.value)}
          >
            <option value={"---"}>---</option>
            <option value="active">Approved</option>
            <option value="paused">Incomplete</option>
            <option value="delayed">Rejected</option>
          </Select>
        </Field>
        <div className="items-end mt-8 flex flex-col-reverse gap-3 *:w-full sm:flex-row sm:*:w-auto">
          <Button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              setStatus("---");
              setIsOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            color="dark"
            disabled={status === "---"}
            onClick={() => setIsOpen(false)}
          >
            Update
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
};
