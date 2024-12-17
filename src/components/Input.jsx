import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const Input = () => {
  const [value, setValue] = useState('ditto');
  const [pokemon, setPokemon] = useState([]);

  function inputFunction(e) {
    const lower = e.target.value;
    setValue(lower.toLowerCase());
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
        const data = await res.json();
        setPokemon(data);

        console.log(pokemon.abilities);

        // console.log(data);
      } catch (err) {
        console.log('got an error', err);
      }
    };
    fetchData();
  }, []);

  // const realPoke = [...pokemon];

  console.log(pokemon.abilities);

  // const orgData = {
  //   name: pokemon.name,
  //   abilities: pokemon.abilities,
  //   srcFront: pokemon.sprites.front_default,
  //   srcBack: pokemon.sprites.front_default,
  // };

  return (
    <>
      <input
        onChange={inputFunction}
        type="text"
        placeholder="Enter Your Pokemon Name"
        className="border-solid border-2 py-2 px-5 rounded-md w-64 mt-7 mb-14"
      />

      {pokemon.name}

      <Card />
    </>
  );
};

export default Input;
