import React from 'react';
import { useState } from 'react';
import StarWarsDisplay from './StarWarsDisplay';

function StarWars() {
  const [id, setId] = useState(1);
  const [data, setData] = useState(null);

  async function getCharacter(characterId) {
    try {
      const res = await fetch(`https://swapi.dev/api/people/${characterId}/`);
      const json = await res.json();

      const name = json.name;
      const height = json.height;
      const mass = json.mass;
      const hairColor = json.hair_color;
      const eyeColor = json.eye_color;

      setData({
        name,
        height,
        mass,
        hairColor,
        eyeColor
      });
    } catch(err) {
      console.log(err);
    }
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
    </div>
  );
}

export default StarWars;
