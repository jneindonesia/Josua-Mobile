import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from './screens/Home';

const Stack = createStackNavigator();
// const AuthStack = createStackNavigator();

const Router = () => {
  // const { user } = useSelector(selectProfile);

  // if (!user.access_token) {
  //   return (
  //     <NavigationContainer>
  //       <AuthStack.Navigator
  //         screenOptions={ { headerShown: false } }
  //         initialRouteName={ 'Login' }>
  //         <AuthStack.Screen name={ 'Login' } component={ Login } />
  //       </AuthStack.Navigator>
  //     </NavigationContainer>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={ {
          animationEnabled: true,
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        } }
        initialRouteName='Home'>
        <Stack.Screen name='Home' component={ Home } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
