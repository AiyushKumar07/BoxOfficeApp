const ShowMainData = ({ image, name, rating, summary, genres }) => {
  return (
    <div>
      <img src={image ? image.original : '/image-not-found.png'} alt={name} />
      <div>{rating.average || 'N/A'}</div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
      <div>
        Genres:
        <div>
          {genres.map(genre => (
            <span key={genre}>{genre} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
