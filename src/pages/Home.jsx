import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <>
      Welcome Home Page
      <br />
      <Link to={'/starred'}>Go to Starred Page</Link>
    </>
  );
};
export default Home;
