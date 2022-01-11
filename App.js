// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// export screens
import Stacks from './components/Stacks/Stacks';

function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

export default App;