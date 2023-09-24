const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img
              src={person.image ? person.image.medium : 'image-not-found.png'}
              alt=""
            />
          </div>
          <div>
            {person.name} | {character.name} {Boolean(voice) && '| Voice-Over'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
