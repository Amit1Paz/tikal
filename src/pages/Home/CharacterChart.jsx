import { Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import BarChart, { Bar, Legend } from '../../components/BarChart/BarChart';

function CharacterChart({ data, status }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!data) return;
    const givenCharacters = [
      { name: 'Rick Sanchez', color: '#69c8ec' },
      { name: 'Summer Smith', color: '#e762d7' },
      { name: 'Morty Smith', color: '#f6fa2c' },
      { name: 'Beth Smith', color: '#fb6467' },
      { name: 'Jerry Smith', color: '#526e2d' },
    ];
    const charactersData = findCharacterstData(data, givenCharacters);
    createChartData(charactersData, givenCharacters);
  }, [data]);

  const findCharacterstData = (data, charactersArray) => {
    const charactersData = charactersArray.map((character) => {
      return data.find((char) => char.name === character.name);
    });

    return charactersData;
  };

  const createChartData = (data, charactersArray) => {
    const chartData = data.map((character, index) => {
      const { name, episode } = character;
      const color = charactersArray[index].color;
      return { name, color, episodes: episode.length };
    });

    const sortedChartData = chartData.sort((a, b) => b.episodes - a.episodes);
    console.log(sortedChartData);
    setChartData(sortedChartData);
  };

  if (status === 'loading') {
    return (
      <Box display='flex' justifyContent='space-around'>
        <Skeleton variant='rectangular' height='15rem' width='2rem' />
        <Skeleton variant='rectangular' height='15rem' width='2rem' />
        <Skeleton variant='rectangular' height='15rem' width='2rem' />
        <Skeleton variant='rectangular' height='15rem' width='2rem' />
        <Skeleton variant='rectangular' height='15rem' width='2rem' />
      </Box>
    );
  }

  return (
    <>
      <StyledContainer
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <BarChart height={15} alignItems='end'>
          {chartData &&
            chartData.map((character) => {
              const { color, episodes } = character;
              const maxEpisodes = chartData[0].episodes;

              return (
                <Bar
                  key={uuidv4()}
                  width='2rem'
                  bgcolor={color}
                  minHeight={`${(episodes / maxEpisodes) * 100}%`}
                  color='white'
                >
                  {episodes}
                </Bar>
              );
            })}
        </BarChart>

        <Legend legendArray={chartData} />
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 950px) {
    display: block;
  }
`;

export default CharacterChart;
