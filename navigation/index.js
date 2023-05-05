import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import "react-native-gesture-handler";
import MainContainer from '../screens/News';
import NewTweetScreen from '../screens/CreatPost';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import OTP from '../screens/OTP';
import Profile from '../screens/Profile';
import ResetPassWord from '../screens/ResetPassWord';
import InputNumber from '../screens/InputNumber';
import Search from '../screens/Search';
import Notification from './../screens/Notification';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EditProFile from '../screens/EditProFile';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen
        name="Trang chủ"
        component={MainContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tìm kiếm"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications"  size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
          name="Hồ sơ"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      
    </Tab.Navigator>
  )
}


const Navigation = () => {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName= "LognIn" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LoginScreen}/>
            <Stack.Screen name="home" component={Tabs}  />
            <Stack.Screen name="Post Create" component={NewTweetScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="Đổi mật khẩu" component={ResetPassWord} options={{ headerShown: true }} />
            <Stack.Screen name="Nhập số điện thoại" component={InputNumber} options={{ headerShown: true }}/>
            <Stack.Screen name="Nhận OTP" component={OTP} options={{ headerShown: true }}/>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Notification" component={Notification}/>
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="EditProfile" component={EditProFile}/>
         
 
 
        </Stack.Navigator>

</NavigationContainer>
      
      
    );
}
export default Navigation;