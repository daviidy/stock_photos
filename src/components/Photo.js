import PropTypes from 'prop-types';

const Photo = ({ photo }) => (
  <p>
    {photo.alt_description}
  </p>
);

export default Photo;

Photo.propTypes = {
  photo: PropTypes.shape({
    alt_description: PropTypes.string.isRequired,
  }).isRequired,
};
