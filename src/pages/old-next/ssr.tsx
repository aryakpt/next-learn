import React from 'react';
import { apiGetPokemon } from '@/services/api';
import Image from 'next/image';
interface Props {
  pokemons: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}

function SSR({ pokemons }: Props) {
  return (
    <div>
      <h2>Pokemon List</h2>
      {pokemons.map((pokemon: { id: number; name: string; image: string }) => {
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

export async function getServerSideProps() {
  // Fetch data from external API
  const response = await apiGetPokemon();
  const pokemons = response?.data;
  // Pass data to the page via props
  return { props: { pokemons } };
}

export default SSR;
