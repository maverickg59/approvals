import {
  Table as TableContainer,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/Atoms/table";
import Strong, { Text } from "@/components/Atoms/text";

type Props = {
  striped?: boolean;
  labels: string[];
  children: React.ReactNode;
  tableName?: string;
};

export const Table = ({ striped, labels, children, tableName }: Props) => {
  return (
    <>
      <Text>
        <Strong>{tableName}</Strong>
      </Text>
      <TableContainer striped={striped}>
        <TableHead>
          <TableRow>
            {labels.map((label) => {
              return <TableHeader key={label}>{label}</TableHeader>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </TableContainer>
    </>
  );
};
