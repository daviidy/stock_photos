/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Photo from '../components/Photo';
import fetchPhotosAction from '../modules/fetchPhotos';
import { getPhotos, getPhotosError, getPhotosPending } from '../redux/reducers/photoReducer';

const PhotosList = ({
  photos,
  error,
  pending,
  fetchPhotos,
}) => {
  useEffect(() => {
    fetchPhotos();
  }, []);
  const renderPhotos = (arr) => (arr.map((val) => (
    <div key={val.id} className="col-4 mb-3">
      <Photo photo={val} />
    </div>
  )));

  const shouldShowSpinner = () => {
    if (pending === false) return false;
    return true;
  };

  console.log(`pending: ${pending}`);
  console.log(`photos: ${photos}`);

  if (shouldShowSpinner()) {
    return (
      <div className="text-center col-12">
        <div className="spinner-border" />
      </div>
    );
  }

  return (
    <>
      {
        error
          ? <p>{error}</p>
          : renderPhotos(photos)
        }
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state.photos);
  return {
    error: getPhotosError(state),
    photos: getPhotos(state),
    pending: getPhotosPending(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPhotos: fetchPhotosAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);

PhotosList.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  error: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.shape({
    alt_description: PropTypes.string,
  })),
};

PhotosList.defaultProps = {
  pending: true,
  error: null,
  photos: [],
};
