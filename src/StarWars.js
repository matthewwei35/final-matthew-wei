import React from 'react';
import { useState } from 'react';
import StarWarsDisplay from './StarWarsDisplay';
import './StarWars.css';

function StarWars() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);
  const [saved, setSaved] = useState([]);

  let savedList = [];

  async function getCharacter(characterId) {
    try {
      const res = await fetch(`https://swapi.dev/api/people/${characterId}/`);
      const json = await res.json();
      
      const name = json.name;
      const height = json.height;
      const mass = json.mass;
      const hairColor = json.hair_color;
      const eyeColor = json.eye_color;

      const homeWorldLink = json.homeworld;
      const homeWorldRes = await fetch(homeWorldLink);
      const homeWorldJson = await homeWorldRes.json();
      const homeWorld = homeWorldJson.name;

      setData({
        name,
        height,
        mass,
        hairColor,
        eyeColor,
        homeWorld
      });
    } catch(err) {
      console.log(err);
    }
  }

  function saveCharacter() {
    savedList.push(data);
    setSaved(savedList);
  }

  return (
    <div className="StarWars">
      <form onSubmit={e => {
        e.preventDefault();
      }}>
        <input
          onChange={(e) => setId(e.target.value)}
          value={id}
          placeholder={'Character Id'}
        />
        <button onClick={() => getCharacter(id)}>Submit</button>
      </form>
      {data && <StarWarsDisplay {...data} />}
      <button onClick={() => saveCharacter()}>Save</button>
    </div>
  );
}

export default StarWars;
