import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <a href={`/photos/${photo.id}`}>
    {
    photo.alt_description
      ? photo.alt_description
      : 'null'
    }
  </a>
);

export default Photo;

Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string,
    alt_description: PropTypes.string,
  }).isRequired,
};
