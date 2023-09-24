import { getShowByIds } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import ShowGrid from '../components/shows/ShowGrid';

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
    return <div>No Starred Shows</div>;
  }
  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }
  if (starredShowsErrors) {
    return <div>Error Occured : {starredShowsErrors.message}</div>;
  }

  return <div>Shows Are Loading....</div>;
};

export default Starred;
