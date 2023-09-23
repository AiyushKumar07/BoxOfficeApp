import ActorsCard from './ActorCard';
const ActorsGrid = ({ actors }) => {
  return (
    <div>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={
            data.person.image
              ? data.person.image.medium
              : '/image-not-found.png'
          }
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
