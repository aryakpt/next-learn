import axios from 'axios';

export const apiGetWorldTime = async () => {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/Asia/Jakarta');
    return response;
  } catch (error: any) {
    console.error(error.message);
  }
};

export const apiGetPokemon = async () => {
  try {
    const response = await axios.get('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
    return response;
  } catch (error: any) {
    console.error(error.message);
  }
};
