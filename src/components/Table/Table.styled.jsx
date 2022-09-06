import { Table, TableCell } from '@mui/material';
import { css, styled } from '@mui/material/styles';

const StyledTable = styled(Table)``;

const StyledTableCell = styled(TableCell)`
  ${({ theme }) => {
    const { palette } = theme;
    return css`
      &.MuiTableCell-head {
        background-color: ${palette.primary.main};
        font-weight: 700;
        color: white;
      }
      color: ${palette.white};
    `;
  }}
`;

export { StyledTable, StyledTableCell };
