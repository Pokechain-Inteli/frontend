"use client";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import { fetchInstance } from "@/config/fetch";
export default function Home() {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchInstance("/pokemons/getAll").then((res) => setData(res));
  }, []);

  return (
    <main>
      <div className="h-20 content-center grid grid-cols-2 text-center text-white shadow-xl bg-red-500 text-xl font-bold w-full">
        <h1 className="p-4">
          {" "}
          <span className="text-4xl"> POKEDEX </span> by PokeChain
        </h1>
        <div>
          <p>Add new pokemon to your Pokedex:</p>
          <div>
            <input
              className="text-black w-20"
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            ></input>
            <button className="bg-white rounded p ml-2 text-black font-medium ">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((pokemon, i) => (
          <Card
            key={i}
            name={pokemon.name}
            types={pokemon.types}
            number={pokemon.number}
            url={pokemon.url}
          />
        ))}
        <Card
          name={"bulba"}
          types={["grass", "grass"]}
          number={1}
          url={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          }
        />
      </div>
    </main>
  );
}
