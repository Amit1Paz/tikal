import { Box, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from '../../components/Table/Table';
import { fetchDimension } from '../../util/services/RickAndMorty.service';

function CharacterTable({ data }) {
  const [mostUnpopularCharecter, setMostUnpopularCharecter] = useState({});

    useEffect(() => {
        if (mostUnpopularCharecter) console.log(mostUnpopularCharecter)
    }, [mostUnpopularCharecter])

  useEffect(() => {
    if (!data) return;

    const { name, origin, episode } = findMostUnpopularCharacter(data);
    const dimension = findDimension(origin.url);
    
    setMostUnpopularCharecter({
      name: name,
      origin: origin.name,
      dimension: dimension,
      episodes: episode.length,
    });
  }, [data]);

  const findMostUnpopularCharacter = (data) => {
    const EarthOriginCharacters = data.filter(
      (character) => character.origin.name === 'Earth (C-137)'
    );

    let mostUnpopular = EarthOriginCharacters[0];
    if (mostUnpopular.episode.length === 1) return mostUnpopular;

    for (let character of EarthOriginCharacters) {
      if (character.episode.length < mostUnpopular.episode.length) {
        mostUnpopular = character;
        if (character.episode.length === 1) break;
      }
    }
    return mostUnpopular;
  };

  const findDimension = async (url) => {
    try {
      const dimension = await fetchDimension(url);
      return dimension;
    } catch (error) {
      return error;
    }
  };

  return (
    <Box>
      {/* <Table>
        <TableBody>
          <TableRow>
            <TableCell variant='head' width='50%'>
              Character name
            </TableCell>
            <TableCell>
              {!mostUnpopularCharacter && <Skeleton variant='text' />}
              {character && character.name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head'>Origin name</TableCell>
            <TableCell>
              {!mostUnpopularCharacter && <Skeleton variant='text' />}
              {character && character.origin}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head'>Origin dimension</TableCell>
            <TableCell>
              {!mostUnpopularCharacter && <Skeleton variant='text' />}
              {character && character.dimension}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head'>Popularity</TableCell>
            <TableCell>
              {!mostUnpopularCharacter && <Skeleton variant='text' />}
              {character && character.episodes}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
    </Box>
  );
}

export default CharacterTable;
