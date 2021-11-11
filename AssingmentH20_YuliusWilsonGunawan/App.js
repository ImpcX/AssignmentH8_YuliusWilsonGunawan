import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Main from './component/Main';

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.utama}>
        <Main />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  utama: {
    backgroundColor: 'lightgray',
  }
});

