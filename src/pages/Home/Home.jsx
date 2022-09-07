import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import { fetchAllCharacters } from '../../util/services/RickAndMorty.service';
import CharacterChart from './CharacterChart';
import CharacterTable from './CharacterTable';

function Home() {
  const [tabValue, setTabValue] = useState(0);

  const { data, status } = useQuery('characters', () => fetchAllCharacters());

  const handleChangeTab = (e, newValue) => setTabValue(newValue);

  if (status === 'error') return <Typography color='error'>Error</Typography>;

  return (
    <>
      <Header />
      <Box as='main'>
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          variant='fullWidth'
          sx={{ marginBottom: '3rem' }}
        >
          <Tab label='Part One' sx={{ color: 'black' }} />
          <Tab label='Part Two' sx={{ color: 'black' }} />
        </Tabs>
        <Box px='20vw'>
          {tabValue === 0 && <CharacterTable data={data} status={status} />}
          {tabValue === 1 && <CharacterChart data={data} status={status} />}
        </Box>
      </Box>
    </>
  );
}

export default Home;
