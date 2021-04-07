import PropTypes from 'prop-types';

const TopicFilter = ({ filter, topics, handleFilterChange }) => {
  const handleChange = (e) => {
    const index = e.nativeEvent.target.selectedIndex;
    handleFilterChange(e.nativeEvent.target[index].text, e.target.value);
  };

  return (
    <>
      <div className="col-12 text-center">
        <h2 className="font-weight-bold">{filter}</h2>
      </div>
      <div className="col-12 mt-2 mb-3">
        <select className="form-control" id="topic" onChange={handleChange}>
          <option value="All">All</option>
          {topics.map((val) => (
            <>
              <option key={val.id} value={val.id}>
                {val.title}
              </option>
            </>
          ))}

        </select>
      </div>
    </>
  );
};

export default TopicFilter;

TopicFilter.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

TopicFilter.defaultProps = {
  topics: [],
};
