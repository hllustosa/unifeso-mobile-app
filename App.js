import * as React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/Login';
import List from './screens/List';
import Form from './screens/Form';
import Camera from './screens/Camera';
import store from './redux/store';

const Stack = createStackNavigator();

const App = () =>
  (React$Node = () => {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Camera" component={Camera} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  });

export default App;
