import { useQuery } from 'react-query';
import Header from '../../components/Header/Header';
import { fetchAllCharacters } from '../../util/services/RickAndMorty.service';
import CharacterTable from './CharacterTable';

function Home() {
  const { data, status } = useQuery('characters', () => fetchAllCharacters());

  return (
    <>
      <Header />;
      <CharacterTable data={data} status={status} />
    </>
  );
}

export default Home;
