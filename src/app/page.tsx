"use client";
import React, { useState } from "react";
import { ApprovalsDialog } from "./_components/approvals-dialog";
import { ApprovalsTable } from "./_components/approvals-table";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  let [status, setStatus] = useState("---");

  return (
    <main className="flex flex-col justify-between">
      <ApprovalsTable onClick={setIsOpen} />
      <ApprovalsDialog
        setIsOpen={setIsOpen}
        setStatus={setStatus}
        isOpen={isOpen}
        status={status}
      />
    </main>
  );
}
