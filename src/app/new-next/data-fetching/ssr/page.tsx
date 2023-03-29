import React from 'react';

import Image from 'next/image';

async function getData() {
  const response = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json', {
    cache: 'no-store',
  });
  return await response.json();
}

async function SSR() {
  const pokemons: any[] = await getData();
  return (
    <div>
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
