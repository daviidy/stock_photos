import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <a href={`/photos/${photo.id}`}>
    <img
      className="img-fluid rounded"
      src={photo.urls.regular}
      alt={photo.alt_description}
    />
  </a>
);

export default Photo;

Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string,
    alt_description: PropTypes.string,
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
  }).isRequired,
};
