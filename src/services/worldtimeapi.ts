export const apiGetWorldTime = async () => {
  try {
    const res = await fetch('http://worldtimeapi.org/api/ip');
    const response = await res.json();
    return response;
  } catch (error: any) {
    console.error(error.message);
  }
};
