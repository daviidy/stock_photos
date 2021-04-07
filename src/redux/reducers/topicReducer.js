import { FETCH_TOPICS_PENDING, FETCH_TOPICS_SUCCESS, FETCH_TOPICS_ERROR } from '../actions/actionsTypes';

export const topicsState = {
  pending: false,
  topics: [],
  error: null,
};

const topics = (state = topicsState, action) => {
  switch (action.type) {
    case FETCH_TOPICS_PENDING:
      return {
        ...state,
        pending: true,
      };

    case FETCH_TOPICS_SUCCESS:
      return {
        ...state,
        pending: false,
        topics: action.topics,
      };

    case FETCH_TOPICS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getTopics = (state) => state.topics.topics;
export const getTopicsPending = (state) => state.topics.pending;
export const getTopicsError = (state) => state.topics.error;

export default topics;
