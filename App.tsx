import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {category_key, client_key, note_key} from './src/constants/storage-keys';
import {CategoryType} from './src/types/general-types';

type Props = {};

const App = (props: Props) => {
  useEffect(() => {
    getAppData();
  }, []);

  const getAppData = async () => {
    const categoryList: CategoryType[] = [
      'Active Duty',
      'Goal Evidence',
      'Support Coordination',
    ];
    const values = await Promise.all([
      AsyncStorage.getItem(category_key),
      AsyncStorage.getItem(note_key),
      AsyncStorage.getItem(client_key),
    ]);
    const [savedCategoryList, savedNotes, savedClients] = values;
    if (!savedCategoryList) {
      try {
        await AsyncStorage.setItem(category_key, JSON.stringify(categoryList));
        console.log('Categories saved successfully');
        console.log(
          'saved categories',
          await AsyncStorage.getItem(category_key),
        );
      } catch (error) {
        console.log('Error while setting the category list');
      }
    }
  };

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
