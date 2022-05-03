import React from 'react';
import { View, StyleSheet } from 'react-native'
import 'react-native-gesture-handler';

import Routes from './navigation/Routes';
import TabsRoutes from './navigation/TabsRoutes';

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})


export default App;
