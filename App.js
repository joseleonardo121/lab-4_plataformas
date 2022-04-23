import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import OurFlatList from './components/ourFlatList/OurFlatList';
import ConexionFeach from './components/conexionFetch/ConexionFetch';

/*export default function App() {
  return (
    <View style={styles.container}>
      <OurFlatList />
    </View>
  );
}*/

export default function App() {
  return <ConexionFeach />;
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});*/
