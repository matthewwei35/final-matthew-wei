import React from 'react';
import { useState } from 'react';

function StarWars() {
  const [id, setId] = useState(1);

  return (
    <div className="StarWars">
      <input
        onChange={(e) => setId(e.target.value)}
        value={id}
        placeholder={'Character Id'}
      />
      <button>Submit</button>
    </div>
  );
}

export default StarWars;
