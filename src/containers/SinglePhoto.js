/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import fecthSinglePhotoAction from '../modules/fetchSinglePhoto';
import { getPhoto, getPhotoError, getPhotoPending } from '../redux/reducers/singlePhotoReducer';
import Photo from '../components/Photo';
import PhotoDetails from '../components/PhotoDetails';

const SinglePhoto = (props) => {
  const {
    match: { params },
    photo,
    error,
    pending,
    fetchSinglePhoto,
  } = props;

  useEffect(() => {
    fetchSinglePhoto(params.id);
  }, []);

  const shouldShowSpinner = () => {
    if (pending === false) return false;
    return true;
  };

  console.log(`pending: ${pending}`);
  console.log(`photos: ${photo}`);

  if (shouldShowSpinner()) {
    return <p>spinner</p>;
  }

  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-8">
          {
            error || <Photo photo={photo} />
          }
        </div>
        <div className="col-4">
          <PhotoDetails photo={photo} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    error: getPhotoError(state),
    photo: getPhoto(state),
    pending: getPhotoPending(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchSinglePhoto: fecthSinglePhotoAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SinglePhoto);

SinglePhoto.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  fetchSinglePhoto: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  error: PropTypes.string,
  photo: PropTypes.shape({
    alt_description: PropTypes.string,
    id: PropTypes.string,
  }),
};

SinglePhoto.defaultProps = {
  pending: true,
  error: null,
  photo: {},
};
