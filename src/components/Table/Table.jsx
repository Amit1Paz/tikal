import { TableBody, TableRow } from '@mui/material';
import { StyledTable, StyledTableCell as TableCell } from './Table.styled';

function Table({ children, ...rest }) {
  return <StyledTable {...rest}>{children}</StyledTable>;
}

export default Table;
export { TableCell, TableRow, TableBody };
