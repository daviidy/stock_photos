import PropTypes from 'prop-types';

const TopicFilter = ({ topics }) => (
  <div className="col-12 mt-2 mb-3">
    <select className="form-control" name="topic" id="topic">
      {topics.map((val) => (
        <option key={val.id} value={val.title}>
          {val.title}
        </option>
      ))}

    </select>
  </div>
);

export default TopicFilter;

TopicFilter.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

TopicFilter.defaultProps = {
  topics: [],
};
