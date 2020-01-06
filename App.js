import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, dark as darkTheme } from '@eva-design/eva';

import HomeScreen from './src/screens/Home'

const App = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <HomeScreen />
    </ApplicationProvider>
  )
}

export default App;
