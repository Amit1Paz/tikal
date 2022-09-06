import { Box, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from '../../components/Table/Table';

function CharacterTable({ data, status }) {
  const [mostUnpopularCharacter, setMostUnpopularCharacter] = useState();
  const planet = 'Earth';
  const dimension = 'C-137';

  useEffect(() => {
    if (!data) return;

    const { name, origin, episode } = findMostUnpopularCharacter(data);
    setMostUnpopularCharacter({
      name: name,
      origin: origin.name,
      dimension: dimension,
      episodes: episode.length,
    });
  }, [data]);

  const findMostUnpopularCharacter = (data) => {
    const EarthOriginCharacters = data.filter(
      (character) => character.origin.name === `${planet} (${dimension})`
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

  return (
    <Box>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell variant='head' width='50%'>
              Character name
            </TableCell>
            <TableCell>
              {status === 'loading' && <Skeleton variant='text' />}
              {mostUnpopularCharacter && mostUnpopularCharacter.name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head'>Origin name</TableCell>
            <TableCell>
              {status === 'loading' && <Skeleton variant='text' />}
              {mostUnpopularCharacter && mostUnpopularCharacter.origin}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head'>Origin dimension</TableCell>
            <TableCell>
              {status === 'loading' && <Skeleton variant='text' />}
              {mostUnpopularCharacter && mostUnpopularCharacter.dimension}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant='head'>Popularity</TableCell>
            <TableCell>
              {status === 'loading' && <Skeleton variant='text' />}
              {mostUnpopularCharacter && mostUnpopularCharacter.episodes}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}

export default CharacterTable;
