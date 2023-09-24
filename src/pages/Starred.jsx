import { useStarredShow } from '../lib/useStarredShow';
const Starred = () => {
  const [starredShows] = useStarredShow();
  return <div>Starred pages, Starred {starredShows.length};</div>;
};

export default Starred;
