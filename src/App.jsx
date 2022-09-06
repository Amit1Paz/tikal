import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home/Home';
import theme from './util/theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
