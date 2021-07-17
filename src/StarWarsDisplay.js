import './StarWarsDisplay.css';

function StarWarsDisplay(props) {
  const { name, height, mass, hairColor, eyeColor } = props;
  
  return (
    <div className="StarWarsDisplay">
      <h2>{name}</h2>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hairColor}</p>
      <p>Eye Color: {eyeColor}</p>
    </div>
  );
}

export default StarWarsDisplay;
