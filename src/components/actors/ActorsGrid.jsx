import { FlexGrid } from '../common/FlexGrid';
import ActorsCard from './ActorCard';
import notFoundSrc from '../../lib/image-not-found.png';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorsCard
          key={data.person.id}
          name={data.person.name}
          country={data.person.country ? data.person.country.name : null}
          birthday={data.person.birthday}
          deathday={data.person.deathday}
          gender={data.person.gender}
          image={data.person.image ? data.person.image.original : notFoundSrc}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
