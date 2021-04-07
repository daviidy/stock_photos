/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Photo from '../components/Photo';
import fetchPhotosAction from '../modules/fetchPhotos';
import fetchTopicsAction from '../modules/fetchTopics';
import { getPhotos, getPhotosError, getPhotosPending } from '../redux/reducers/photoReducer';
import TopicFilter from './TopicFilter';
import { getTopics, getTopicsError, getTopicsPending } from '../redux/reducers/topicReducer';

const PhotosList = ({
  photos,
  error,
  pending,
  fetchPhotos,
  fetchTopics,
  errorTopic,
  pendingTopic,
  topics,
}) => {
  useEffect(() => {
    fetchPhotos();
    fetchTopics();
  }, []);
  const renderPhotos = (arr) => (arr.map((val) => (
    <div key={val.id} className="col-4 mb-3">
      <a href={`/photos/${val.id}`}>
        <Photo photo={val} />
      </a>
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
      <TopicFilter topics={topics} />
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
    errorTopic: getTopicsError(state),
    topics: getTopics(state),
    pendingTopic: getTopicsPending(state),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPhotos: fetchPhotosAction,
  fetchTopics: fetchTopicsAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);

PhotosList.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  fetchTopics: PropTypes.func.isRequired,
  pending: PropTypes.bool,
  error: PropTypes.string,
  photos: PropTypes.arrayOf(PropTypes.shape({
    alt_description: PropTypes.string,
  })),
  pendingTopic: PropTypes.bool,
  errorTopic: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

PhotosList.defaultProps = {
  pending: true,
  error: null,
  photos: [],
  pendingTopic: true,
  errorTopic: null,
  topics: [],
};
