import { getShowByIds } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../components/common/TextCenter';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsErrors } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),
    refetchOnWindowFocus: 'false',
  });

  if (starredShows?.length === 0) {
    return <TextCenter>No Starred Shows</TextCenter>;
  }
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShowsErrors) {
    return (
      <TextCenter>Error Occured : {starredShowsErrors.message}</TextCenter>
    );
  }

  return <TextCenter>Shows Are Loading....</TextCenter>;
};

export default Starred;
