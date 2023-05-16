import React from 'react';
import { Router } from './src/routes/router';
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import configureStore from './redux/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store = { store }>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </Provider>
)

export default App;
