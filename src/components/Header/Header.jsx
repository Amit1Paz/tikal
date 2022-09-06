import { Typography } from '@mui/material';
import { StyledHeader } from './Header.styled';

function Header({ children, ...rest }) {
  return (
    <StyledHeader as='header' {...rest}>
      <Typography variant='h1' mb={1}>
        Tikal Code Challenge
      </Typography>
      <Typography variant='h2'>Rick and Morty</Typography>
    </StyledHeader>
  );
}

export default Header;
