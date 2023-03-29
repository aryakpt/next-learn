import axios from 'axios';

export const apiGetWorldTime = async () => {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/Asia/Jakarta');
    return response;
  } catch (error: any) {
    console.error(error.message);
  }
};
