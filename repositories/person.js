import {openDatabase} from 'react-native-sqlite-storage';

export default class PersonRepository {
  DBNAME = 'app.db';
  CREATE =
    'CREATE TABLE IF NOT EXISTS person(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100), birthday VARCHAR(10))';

  SELECT = 'SELECT * FROM person';

  INSERT = 'INSERT INTO person (name, birthday) values (?, ?)';

  DELETE = 'DELETE FROM person WHERE id = ?';

  Retrieve(onSuccess, onError) {
    var db = openDatabase({name: this.DBNAME});
    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(this.SELECT, [], onSuccess, onError);
    });
  }

  Save(person, onSuccess, onError) {
    var db = openDatabase({name: this.DBNAME});

    db.transaction((transaction) => {
      transaction.executeSql(this.CREATE, []);
      transaction.executeSql(
        this.INSERT,
        [person.name, person.birthday],
        onSuccess,
        onError,
      );
    });
  }

  Delete(person, onSuccess, onError) {
    var db = openDatabase({name: this.DBNAME});

    db.transaction((transaction) => {
      transaction.executeSql(this.DELETE, [person.id], onSuccess, onError);
    });
  }
}
