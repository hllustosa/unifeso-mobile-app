import * as React from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './screens/Splash';
import List from './screens/List';
import Form from './screens/Form';
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
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Form" component={Form} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  });

export default App;
