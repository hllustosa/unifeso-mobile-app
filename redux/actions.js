export const ADD_PERSON = (person) => ({
  type: 'ADD_PERSON',
  payload: person,
});


export const SAVE_TEMP_PHOTO = (photo) => ({
  type: 'SAVE_TEMP_PHOTO',
  payload: photo,
});

export const CLEAN_TEMP_PHOTO = () => ({
  type: 'CLEAN_TEMP_PHOTO'
});
