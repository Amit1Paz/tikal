import { Box, Typography } from '@mui/material';
import { StyledBarChart, StyledBar, StyledLegend } from './BarChart.styled';
import { v4 as uuidv4 } from 'uuid';

function BarChart({
  children,
  height,
  display,
  alignItems,
  justifyContent,
  ...rest
}) {
  return (
    <StyledBarChart
      height={height}
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...rest}
    >
      {children}
    </StyledBarChart>
  );
}

function Bar({ children, ...rest }) {
  return <StyledBar {...rest}>{children}</StyledBar>;
}

function Legend({ legendArray, ...rest }) {
  return (
    <StyledLegend {...rest}>
      {legendArray.map((item) => {
        return (
          <Box key={uuidv4()} display='flex' alignItems='center'>
            <Box bgcolor={item.color} width='1rem' height='1rem' mr={1} />
            <Typography>{item.name}</Typography>
          </Box>
        );
      })}
    </StyledLegend>
  );
}

export default BarChart;
export { Bar, Legend };
