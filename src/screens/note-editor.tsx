import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../constants/colors';
import NoteHeader from '../components/note-header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation-types';
import {useNavigation} from '@react-navigation/native';
import PostIcon from '../../assets/icons/PostIcon';

type Props = {};

type NavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'NoteEditor'
>;

const NoteEditor = (props: Props) => {
  const navigation = useNavigation<NavigationProp>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const createNote = async () => {};

  return (
    <SafeAreaView style={styles.mainContainer}>
      <NoteHeader
        title="Create Note"
        onBackPress={() => navigation.goBack()}
        rightIcon={
          isLoading ? (
            <View style={styles.iconStyle}>
              <ActivityIndicator size={'small'} color={Colors.WHITE} />
            </View>
          ) : (
            <PostIcon style={styles.iconStyle} onPress={() => createNote()} />
          )
        }
      />
      <Text>NoteEditor</Text>
    </SafeAreaView>
  );
};

export default NoteEditor;

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: Colors.MYNOTE_GREEN,
    borderRadius: 32,
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: Colors.WHITE,
  },
});
