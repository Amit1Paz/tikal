import axiosInstance from '../api/axiosInstance';

async function getNumOfCharacter(url) {
  try {
    const { data: { info } } = await axiosInstance(`${url}`);
    return info.count;
  } catch (error) {
    return error;
  }
}

async function fetchAllCharacters() {
  try {
    const url = '/character';
    const numOfCharacters = await getNumOfCharacter(url);
    const idsArray = [];
    for (let i = 1; i <= numOfCharacters; i++) idsArray.push(i);
    const { data } = await axiosInstance(`/character/${idsArray}`);
    return data;
  } catch (error) {
    return error;
  }
}

export default fetchAllCharacters;
