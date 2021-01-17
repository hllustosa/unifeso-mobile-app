export default class UserRepository {
  Login(user, password, callback) {
    return fetch('http://10.0.2.2:8080/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        callback(json, '');
      })
      .catch((error) => {
        callback({}, error);
      });
  }
}
