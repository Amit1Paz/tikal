import { Box } from '@mui/material';
import { css, styled } from '@mui/material/styles';

const StyledHeader = styled(Box)`
  ${({ theme }) => {
    const { palette } = theme;
    return css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 40vh;
      text-align: center;
      padding: 2rem 1rem;
      background-color: ${palette.background.paper};
      color: ${palette.primary.main};
    `;
  }}

  @media (max-width: 500px) {
    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }
  }
`;

export { StyledHeader };
