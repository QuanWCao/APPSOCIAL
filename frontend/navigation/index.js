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
const Stack = createNativeStackNavigator();


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
            <Stack.Screen name="Home" component={Feed} />
            <Stack.Screen name="Post Create" component={Post} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="Đổi mật khẩu" component={ResetPassWord} options={{ headerShown: true }} />
            <Stack.Screen name="Nhập số điện thoại" component={InputNumber} options={{ headerShown: true }}/>
            <Stack.Screen name="Nhận OTP" component={OTP} options={{ headerShown: true }}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;