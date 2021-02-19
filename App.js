import React from 'react';
import { View, Text, StatusBar,} from 'react-native';
// import Login from './src/screens/Login';
// import Produtos from './src/screens/Produtos';

import Routes from './src/Routes';

function App() {
  return (
    <View >
      <StatusBar />

      <Routes />
    </View>
  )
}

export default App;
