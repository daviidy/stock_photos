import PropTypes from 'prop-types';

const PhotoDetails = ({ photo }) => (
  <div className="shadow p-3 rounded">
    <div className="row">
      <div className="col-2">
        <i className="fas fa-user" />
      </div>
      <div className="col-10">
        <p>
          By
          {' '}
          {photo.user.name}
        </p>
      </div>
    </div>
    <div className="row">
      <p className="col-12">
        <strong>Description: </strong>
        {photo.description}
      </p>
    </div>
    <p>

      {photo.alt_description}
    </p>
  </div>
);

export default PhotoDetails;

PhotoDetails.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string,
    alt_description: PropTypes.string,
    description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
  }).isRequired,
};
