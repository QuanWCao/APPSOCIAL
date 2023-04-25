import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import "react-native-gesture-handler";
import MainContainer from '../screens/News';
import NewTweetScreen from '../screens/CreatPost';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import OTP from '../screens/OTP';
import ResetPassWord from '../screens/ResetPassWord';
import InputNumber from '../screens/InputNumber';
import Search from '../screens/Search';
import Notification from './../screens/Notification';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const search = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

const notification = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="notification" component={Notification} />
    </Stack.Navigator>
  );
};

const Feed = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Feed Screen" component={MainContainer} />
      </Stack.Navigator>
    );
  };
const Post = () => {
    return (
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="NewTweet" component={NewTweetScreen} />
      </Stack.Navigator>
    );
  };

  const SignIn = () => {
    return (
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  };

const Navigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName= "LognIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={SignIn} />
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Post Create" component={Post} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="Đổi mật khẩu" component={ResetPassWord} options={{ headerShown: true }} />
            <Stack.Screen name="Nhập số điện thoại" component={InputNumber} options={{ headerShown: true }}/>
            <Stack.Screen name="Nhận OTP" component={OTP} options={{ headerShown: true }}/>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="notification" component={Notification}/>
         
 
 
        </Stack.Navigator>


      
        </NavigationContainer>
    );
}
export default Navigation;