import {combineReducers} from 'redux';

const INITIAL_STATE = {
  people: [],
  photo: null,
  token: "",
};

const addPersonReducer = (state, action) => {
  const newState = Object.assign({}, state, {});
  newState.people.push(action.payload);
  return newState;
};

const saveTempPhotoReducer = (state, action) => {
  const newState = Object.assign({}, state, {});
  newState.photo = action.payload;
  return newState;
};

const cleanTempPhotoReducer = (state, action) => {
  const newState = Object.assign({}, state, {});
  newState.photo = action.payload;
  return newState;
};

const login = (state, action) => {
  const newState = Object.assign({}, state, {});
  newState.token = action.payload;
  return newState;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return addPersonReducer(state, action);
    case 'SAVE_TEMP_PHOTO':
      return saveTempPhotoReducer(state, action);
    case 'CLEAN_TEMP_PHOTO':
      return cleanTempPhotoReducer(state, action);
    case 'LOGIN':
        return login(state, action);
    default:
      return state;
  }
};

export default reducer;
