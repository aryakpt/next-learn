'use client';
import React, { useState, useEffect } from 'react';
import { apiGetPokemon } from '@/services/api';
import Image from 'next/image';

function CSR() {
  const [pokemons, setPokemons] = useState<any>([]);

  const getPokemon = async () => {
    const response = await apiGetPokemon();
    setPokemons(response?.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

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

export default CSR;
