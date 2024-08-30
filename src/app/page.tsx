"use client";
import { useState } from "react";
import { Table } from "@/components/Molecules/table";
import { Text, Strong } from "@/components/Atoms/text";
import { TableCell, TableRow } from "@/components/Atoms/table";
import { Button } from "@/components/Atoms/button";
import { Badge } from "@/components/Atoms/badge";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/Atoms/dialog";
import { Field, Label } from "@/components/Atoms/fieldset";
import { Select } from "@/components/Atoms/select";

const cellLabels = [
  "ID",
  "Requester",
  "Approver",
  "Classified",
  "Sensitive",
  "Status",
];
const cellData = [
  {
    id: 1,
    requester: "Chris W.",
    approver: "Phil R.",
    classified: false,
    sensitive: true,
    status: "pending",
  },
  {
    id: 2,
    requester: "Cynthia W.",
    approver: "Phil R.",
    classified: true,
    sensitive: false,
    status: "incomplete",
  },
  {
    id: 3,
    requester: "Cynthia W.",
    approver: "Phil R.",
    classified: false,
    sensitive: false,
    status: "approved",
  },
  {
    id: 4,
    requester: "Chris W.",
    approver: "Phil R.",
    classified: true,
    sensitive: true,
    status: "rejected",
  },
  {
    id: 5,
    requester: "Lorraine R.",
    approver: "Phil R.",
    classified: false,
    sensitive: true,
    status: "incomplete",
  },
  {
    id: 6,
    requester: "Savannah R.",
    approver: "Phil R.",
    classified: true,
    sensitive: true,
    status: "approved",
  },
];
export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  let [status, setStatus] = useState("---");

  return (
    <main className="flex flex-col justify-between">
      {/* create filter for pending (weight of 1), incomplete(weight of 2), rejected (weight of 3), approved (weight of 4) */}
      <Text>
        <Strong>Pending Requests</Strong>
      </Text>
      <Table cellLabels={cellLabels}>
        {cellData.map(
          ({ id, requester, approver, classified, sensitive, status }) => (
            <TableRow
              onClick={() => setIsOpen(true)}
              className="text-zinc-200"
              key={id}
            >
              <TableCell>
                <span className="text-zinc-100">{id}</span>
              </TableCell>
              <TableCell>
                <span className="text-zinc-300">{requester}</span>
              </TableCell>
              <TableCell>
                <span className="text-zinc-300">{approver}</span>
              </TableCell>
              <TableCell>
                {classified ? <Badge color="red">classified</Badge> : ""}
              </TableCell>
              <TableCell>
                {sensitive ? <Badge color="red">sensitive</Badge> : ""}
              </TableCell>
              <TableCell>
                <span>{status}</span>
              </TableCell>
            </TableRow>
          )
        )}
      </Table>
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Meeting Request</DialogTitle>
        <DialogDescription>
          This dialog is used to display and allow for approvals
        </DialogDescription>
        <DialogBody>Meeting data table goes here</DialogBody>
        <DialogActions className="items-end justify-between">
          <Field>
            <Label>Approval Status</Label>
            <Select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value={"---"}>---</option>
              <option value="active">Approved</option>
              <option value="paused">Incomplete</option>
              <option value="delayed">Rejected</option>
            </Select>
          </Field>
          <div className="items-end mt-8 flex flex-col-reverse gap-3 *:w-full sm:flex-row sm:*:w-auto">
            <Button
              onClick={() => {
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
    </main>
  );
}
