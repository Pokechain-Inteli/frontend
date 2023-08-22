"use client";
import { useState } from "react";
import Image from "next/image";

interface CardProps {
    url: string;
    name: string;
    number: number | string;
    types: string[];
    }

const Card = ({ url, name, number, types }) => {
  const [settings, setSettings] = useState(false);

  const toggleSetings = () => {
    console.log("hello");
    setSettings(!settings);
  };

  const handleDeletion = () => {
    fetch(`http://localhost:3000/api/pokemon/${number}`, {
      method: "DELETE",
    });
    window.location.reload();
  }

  return (
    <>
      {!settings ? (
        <div className=" w-64 shadow-lg rounded-xl border-green-500 border-2 text-center m-4">
          <div
            className="w-4 h-4 bg-red-500 rounded-full m-2 absolute"
            onClick={toggleSetings}
          />
          <div className="w-full">
            <Image
            alt="pokemon"
              className="object-cover mx-auto"
              src={url}
              width={250}
              height={10}
            ></Image>
          </div>
          <h1 className="font-semibold text-gray-700 text-xl">{`#${number}`}</h1>
          <h1 className="font-semibold text-2xl">{name}</h1>
          <div className="flex w-full text-center justify-center">
            {types.map((type, index) => (
              <p key={index} className="p-2">
                {type}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-64 shadow-lg rounded-xl border-green-500 border-2 text-center m-4">
          <div
            className="w-4 h-4 bg-red-500 rounded-full m-2 absolute"
            onClick={toggleSetings}
          />
          <p className="mt-20 text-xl">Delete this pokemon?</p>
          <button className="bg-red-500 font-bold p-4 rounded text-white" onClick={handleDeletion}>Delete</button>
        </div>
      )}
    </>
  );
};

export default Card;
