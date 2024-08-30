import {
  Table as TableContainer,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/Atoms/table";
import { Badge } from "@/components/Atoms/badge";
import Strong, { Text } from "@/components/Atoms/text";
import { cellLabels, cellData } from "../data";

type Props = {
  striped?: boolean;
  onClick: (arg: boolean) => void;
};

export const ApprovalsTable = ({ striped, onClick }: Props) => {
  return (
    <>
      {/* create filter for pending (weight of 1), incomplete(weight of 2), rejected (weight of 3), approved (weight of 4) */}
      <Text>
        <Strong>Pending Requests</Strong>
      </Text>
      <TableContainer striped={striped}>
        <TableHead>
          <TableRow>
            {cellLabels.map((label) => {
              return <TableHeader key={label}>{label}</TableHeader>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {cellData.map(
            ({
              meeting_request_id,
              requester_first_name,
              requester_last_name,
              approver_first_name,
              approver_last_name,
              meeting_disclosure: { classified, sensitive },
              approval_status,
            }) => (
              <TableRow
                onClick={() => onClick(true)}
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
        </TableBody>
      </TableContainer>
    </>
  );
};
