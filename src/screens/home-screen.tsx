import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../constants/colors';
import MyNoteButtonBase from '../components/mynote-button-base';
import AppHeader from '../components/app-header';
import MessageContainer from '../components/message-container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {note_key} from '../constants/storage-keys';
import asyncTimeout from '../utils/asyncTimeout';
import {Note} from '../types/general-types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation-types';
import {useIsFocused, useNavigation} from '@react-navigation/native';

type Props = {};
type NavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'MainTabNavigator'
>;

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log('Loading state', isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (!isFocused) return;
    getNotes();
  }, [isFocused]);

  const getNotes = async () => {
    try {
      const [notes] = await Promise.all([AsyncStorage.getItem(note_key)]);
      if (!notes) {
        console.log('No Notes');
        return;
      }
      console.log('Yeah Notes', JSON.parse(notes));
    } catch (error) {
      console.log('Error while getting the saved notes');
    } finally {
      setIsLoading(false);
    }
  };

  const onAddPress = () => {
    navigation.navigate('NoteEditor');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppHeader title="Home" onAddPress={onAddPress} />
      {isLoading ? (
        <View style={styles.contentContainer}>
          <ActivityIndicator size={'large'} color={Colors.MYNOTE_GREEN_LIGHT} />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          {notes.length ? (
            <Text>yay</Text>
          ) : (
            <MessageContainer
              message={`Hmm, it looks like you haven't created any notes yet. \n Press the Add note button or the '+' button on the top right of the screen to create your notes.`}
            />
          )}
          <MyNoteButtonBase
            style={styles.addNoteButton}
            title={'Add Note'}
            onPress={() => onAddPress()}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  addNoteButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    zIndex: 2,
  },
  contentContainer: {
    alignItems: 'center',
    height: '95%',
    justifyContent: 'center',
    width: Dimensions.get('screen').width,
    paddingHorizontal: 12,
    backgroundColor: Colors.WHITE,
  },
  mainContainer: {
    backgroundColor: Colors.WHITE,
  },
});
