import {combineReducers} from 'redux';

const INITIAL_STATE = {
  people: [],
};

const addPersonReducer = (state, action) => {
    const newState = Object.assign({}, state, {});
    newState.people.push(action.payload);
    return newState;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return addPersonReducer(state, action);
    default: return state;
  }
};

export default reducer;
