import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Photo from '../components/Photo';

const PhotosList = ({
  photos,
}) => {
  console.log(photos);

  const renderPhotos = (arr) => (arr.map((val) => (
    <Photo key={val.id} photo={val} />
  )));

  return (
    <div>
      {
              renderPhotos(photos)
        }
    </div>
  );
};

const mapStateToProps = (state) => {
  const { photos } = state;
  return { photos };
};

export default connect(mapStateToProps, null)(PhotosList);

PhotosList.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    alt_description: PropTypes.string.isRequired,
  })).isRequired,
};
