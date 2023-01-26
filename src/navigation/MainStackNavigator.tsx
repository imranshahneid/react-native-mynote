import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '../constants/colors';
import SplashScreen from '../screens/splash-screen';
import {MainStackParamList} from '../types/navigation-types';

const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.WHITE},
      }}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
    </Stack.Navigator>
  );
};
export default MainStackNavigator;
