import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './store/configure-store';
import { Root } from 'native-base';
import { YellowBox } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import Routes from './Routes';

YellowBox.ignoreWarnings([
  'Remote debugger',
  'startLoadWithResult invoked with invalid',
  'Did not receive',
]);

const RootNavigator = FluidNavigator(
  {
    Home: Routes,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}
