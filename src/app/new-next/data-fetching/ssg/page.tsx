import React from 'react';

async function getWorldTime() {
  try {
    const response = await fetch('http://worldtimeapi.org/api/Asia/Jakarta');
    return response;
  } catch (error: any) {
    console.error(error.message);
  }
}

async function SSG() {
  const response: any = await getWorldTime();
  const time = new Date(response?.data?.datetime).toLocaleTimeString('en-US', {
    hour12: false,
  });
  return <div>Fetched - {time} </div>;
}

export default SSG;
