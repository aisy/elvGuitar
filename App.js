import React from 'react';
import 'react-native-gesture-handler';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';
import { AppNavigator } from './src/configs/routes'

const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <AppNavigator />
    </ApplicationProvider>
  )
}

export default App;
