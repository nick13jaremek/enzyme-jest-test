import * as actions from '../actions';

const initialState = {
  messages: [],
};

const actionsMap = {
  [actions.ALERT_CREATED]: (state, action) => {
    const message = action.data;
    return {
      ...state,
      messages: [ ...state.messages, message ]
    };
  },
};

export const alerts = (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
};

