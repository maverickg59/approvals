"use client";
import React, { useEffect, useState } from "react";
import { ApprovalsDialog } from "./_components/approvals-dialog";
import { Table } from "@/components/Molecules/table";
import { TableRow, TableCell } from "@/components/Atoms/table";
import { Badge } from "@/components/Atoms/badge";
import { cellData, cellLabels } from "@/data/data";

import { useRequestStore } from "@/providers/request-provider";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [rowIndex, setRowIndex] = useState<number>(0);

  const { meeting_requests, meeting_request_labels } = useRequestStore(
    (state) => state
  );

  return (
    <main className="flex flex-col justify-between">
      {/* create filter for pending (weight of 1), incomplete(weight of 2), rejected (weight of 3), approved (weight of 4) */}
      <Table tableName="Pending Requests" labels={meeting_request_labels}>
        {meeting_requests.map(
          (
            {
              meeting_request_id,
              requester_first_name,
              requester_last_name,
              approver_first_name,
              approver_last_name,
              meeting_disclosure: { classified, sensitive },
              approval_status,
            },
            i
          ) => (
            <TableRow
              onClick={() => {
                setRowIndex(i);
                setIsOpen(!isOpen);
              }}
              className="text-zinc-200"
              key={meeting_request_id}
            >
              <TableCell>
                <span className="text-zinc-100">{meeting_request_id}</span>
              </TableCell>
              <TableCell>
                <span className="text-zinc-300">
                  {`${requester_first_name} ${requester_last_name}`}
                </span>
              </TableCell>
              <TableCell>
                <span className="text-zinc-300">{`${approver_first_name} ${approver_last_name}`}</span>
              </TableCell>
              <TableCell>
                {classified ? <Badge color="red">classified</Badge> : ""}
              </TableCell>
              <TableCell>
                {sensitive ? <Badge color="amber">sensitive</Badge> : ""}
              </TableCell>
              <TableCell>
                <span>{approval_status}</span>
              </TableCell>
            </TableRow>
          )
        )}
      </Table>
      <ApprovalsDialog
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        rowIndex={rowIndex}
      />
    </main>
  );
}
