import { Box, Skeleton } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
} from '../../components/Table/Table';

function CharacterTable({ data }) {
  const [mostUnpopularCharecter, setMostUnpopularCharecter] = useState({});

  useEffect(() => {
    if (!data) return;
    findMostUnpopularCharacter(data);
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
