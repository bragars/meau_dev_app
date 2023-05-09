import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Router } from './src/routes/routes';
import { Provider } from 'react-redux';
import configureStore from './store';
// import { verifyToken } from './services/user';

const store = configureStore();

const App = () => {
  // const [isVerifyingToken, setIsVerifyingToken] = React.useState(false);

  // const handleComponentDidAppear = (event) => {
  //   if (event.componentName === 'Cadastro Pessoal' && !isVerifyingToken) {
  //     setIsVerifyingToken(true);
  //     verifyToken(event.component.props.navigation).finally(() => {
  //       setIsVerifyingToken(false);
  //     });
  //   }
  // };

  // React.useEffect(() => {
  //   const subscription = navigation.events().registerComponentDidAppear(handleComponentDidAppear);

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);
  
  return (
    <Provider store = { store }>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
