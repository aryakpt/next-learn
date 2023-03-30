import React, { Suspense } from 'react';

import Image from 'next/image';

async function getTime() {
  const response = await fetch('http://worldtimeapi.org/api/Asia/Jakarta', {
    cache: 'no-store',
  });
  return response.json();
}

async function getTimeSlower() {
  const response = await fetch('http://worldtimeapi.org/api/Asia/Jakarta', {
    cache: 'no-store',
  });
  await new Promise((r) => setTimeout(r, 5000));
  return response.json();
}

async function getData() {
  const response = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json', {
    cache: 'no-store',
  });
  return await response.json();
}

const Time = async () => {
  const response: any = await getTimeSlower();
  const time = new Date(response?.datetime).toLocaleTimeString('en-US', {
    hour12: false,
  });
  return <div>Sequentil - {time}</div>;
};

async function SSR() {
  const pokemons: any[] = await getData();
  const response: any = await getTime();
  const time = new Date(response?.datetime).toLocaleTimeString('en-US', {
    hour12: false,
  });
  return (
    <div>
      <Suspense fallback={<>Fetching....</>}>
        {/* @ts-ignore */}
        <Time />
      </Suspense>
      <p>Parralel - {time}</p>
      <h2>Pokemon List</h2>
      {pokemons?.map((pokemon: { id: number; name: string; image: string }) => {
        return (
          <div key={pokemon.id}>
            <Image
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
              width={50}
              height={50}
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default SSR;
