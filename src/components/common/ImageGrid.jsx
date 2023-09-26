import ContentLoader from 'react-content-loader';

const ImageGrid = props => (
  <ContentLoader
    style={{ width: '100%', height: '700px' }}
    // viewBox="0 0 1536 575"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="35" y="20" rx="30" ry="30" width="340" height="605" />
    <rect x="395" y="20" rx="30" ry="30" width="340" height="605" />
    <rect x="755" y="20" rx="30" ry="30" width="340" height="605" />
    <rect x="1115" y="20" rx="30" ry="30" width="340" height="605" />
  </ContentLoader>
);

ImageGrid.metadata = {
  name: 'Hassan Tijani.A',
  github: 'surepeps',
  description: 'Image Grid with Pagination',
  filename: 'ImageGrid',
};

export default ImageGrid;
