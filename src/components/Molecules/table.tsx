import {
  Table as TableContainer,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Atoms/table";

export const Table: React.FC<TableData> = ({
  cellLabels,
  children,
  striped,
}) => {
  return (
    <TableContainer striped={striped}>
      <TableHead>
        <TableRow>
          {cellLabels.map((label) => {
            return <TableHeader key={label}>{label}</TableHeader>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>{children}</TableBody>
    </TableContainer>
  );
};
