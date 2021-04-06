import PropTypes from 'prop-types';

const PhotoDetails = ({ photo }) => (
  <div>
    <p>
      Put the photo details here:
      {photo.alt_description}
    </p>
  </div>
);

export default PhotoDetails;

PhotoDetails.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string,
    alt_description: PropTypes.string,
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
  }).isRequired,
};
