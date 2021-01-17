import store from '../redux/store';

export default class PersonRepository {
  Retrieve(onSuccess, onError) {
    return fetch('http://10.0.2.2:8080/people', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': store.getState().token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        onSuccess({rows: json});
      })
      .catch((error) => {
        alert(error);
        onError(error);
      });
  }

  Save(person, onSuccess, onError) {
    return fetch('http://10.0.2.2:8080/people', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': store.getState().token,
      },
      body: JSON.stringify(person),
    })
      .then(() => {
        onSuccess();
      })
      .catch((error) => {
        alert(JSON.stringify(error))
        onSuccess(error);
      });
  }

  Delete(person, onSuccess, onError) {}
}
