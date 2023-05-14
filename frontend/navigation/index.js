import  React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import "react-native-gesture-handler";
import Post from '../components/Post';
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
import CommentScreens from '../screens/CommentScreens';
import DashBoardAdmin from '../screens/AdminManager.js/AdminDashBoard';
import CreateComment from '../screens/CreateComments';
import ChangePassWord from '../screens/ChangePassWord';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/action';
import Loader from '../components/Loader';
const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen
        name="Home"
        component={MainContainer}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications"  size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
          name="Profile"
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


  const dispatch  = useDispatch() 

  useEffect(() => {

    dispatch(getUser());

    
  }, [dispatch])

  const {isAuthenticated , loading, role} = useSelector(state => state.auth)
  // console.log(user.role)
    return (
      loading ? <Loader /> :
      // 1 la quay 2 la vao
       <NavigationContainer>
        <Stack.Navigator initialRouteName= { role==="user" ? isAuthenticated ? "home":"LogIn" : isAuthenticated ? "Admin":"LogIn" }screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LoginScreen}/>
            <Stack.Screen name="home" component={Tabs}  />
            <Stack.Screen name="Post Create" component={NewTweetScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: true }}/>
            <Stack.Screen name="ResetPassword" component={ResetPassWord} options={{ headerShown: true }} />
            <Stack.Screen name="EnterEmail" component={InputNumber} options={{ headerShown: true }}/>
            <Stack.Screen name="SendOTP" component={OTP} options={{ headerShown: true }}/>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Notification" component={Notification}/>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
            <Stack.Screen name="EditProfile" component={EditProFile}/>
            <Stack.Screen name="Comment" component={CommentScreens} options={{ headerShown: true }}/>
            <Stack.Screen name="Admin" component={DashBoardAdmin} options={{ headerShown: true }}/>
            <Stack.Screen name="CreateComment" component={CreateComment} options={{ headerShown: false }}/>
            <Stack.Screen name='ChangePassWord' component={ChangePassWord} options={{ headerShown: true }} />
            <Stack.Screen name="Post" component={Post} options={{ headerShown: false}}/>
        </Stack.Navigator>

</NavigationContainer>
      
      
    );
}
export default Navigation;