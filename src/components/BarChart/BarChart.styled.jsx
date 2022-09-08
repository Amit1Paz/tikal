import { Box } from '@mui/material';
import { keyframes, styled, css } from '@mui/material/styles';

const StyledBarChart = styled(Box)`
  height: ${({ height }) => height && `${height}rem`};
  width: ${({ width }) => (width ? `${width}rem` : '80%')};
  display: ${({ display }) => (display ? `${display}` : 'flex')};
  align-items: ${({ alignItems }) => (alignItems ? `${alignItems}` : 'center')};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : `space-between`};

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const barAnimation = (height) => keyframes`
  0% { height: 0; }
  100% { height: ${height}; }
`;

const StyledBar = styled(Box)`
  border-radius: 0.2rem 0.2rem 0 0;
  text-align: center;
  animation-name: ${({ height }) => barAnimation(height)};
  animation-duration: 1s;
`;

const StyledLegend = styled(Box)`
  ${({ theme }) => {
    const { palette } = theme;
    return css`
      &div {
        background-color: ${palette.primary.main};
      }
    `;
  }}
  margin-left: 1rem;

  @media (max-width: 950px) {
    width: 100%;
    margin: 1rem 0 0 0;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

const StyledLegendItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 950px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`;

export { StyledBarChart, StyledBar, StyledLegend, StyledLegendItem };
