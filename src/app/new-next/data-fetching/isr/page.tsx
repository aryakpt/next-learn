import React from 'react';

async function getData() {
  const response = await fetch('http://worldtimeapi.org/api/Asia/Jakarta', {
    next: { revalidate: 10 },
  });
  return response.json();
}

async function ISR() {
  const response: any = await getData();
  const time = new Date(response?.datetime).toLocaleTimeString('en-US', {
    hour12: false,
  });
  return <div>Fetched - {time} </div>;
}

export default ISR;
