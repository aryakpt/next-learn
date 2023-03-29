import React from 'react';

async function getData() {
  const response: any = await fetch('http://worldtimeapi.org/api/Asia/Jakarta');
  return response.json();
}

async function SSG() {
  const response: any = await getData();
  const time = new Date(response?.datetime).toLocaleTimeString('en-US', {
    hour12: false,
  });

  return <div>Fetched - {time} </div>;
}

export default SSG;
