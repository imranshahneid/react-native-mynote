import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
