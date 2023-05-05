import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";


import NewTweetScreen from "./screens/CreatPost";
import MainContainer from "./screens/News";
import NewPostButton from "./components/AddPost";

import Navigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";

import CommentScreens from "./screens/CommentScreens";
import LoginScreen from "./screens/Login";
import SignupScreen from "./screens/SignUp";
import ChangePassWord from "./screens/ChangePassWord";
import ResetPassWord from "./screens/ResetPassWord";
import OTP from "./screens/OTP";



import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Search from "./screens/Search";
import Notification from './screens/Notification';
import Profile from "./screens/Profile";
import AdminDashBoard from "./screens/AdminManager.js/AdminDashBoard";
import ListAccount from "./screens/AdminManager.js/ListAccount";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    {/* <NavigationContainer>
      <Profile/>
    </NavigationContainer> */}
   
      
      {/* <Feed /> */}
      {/* <ListAccount/> */}
      <Navigation/>
      {/* <HomeAdmins/> */}
      {/* <NewTweetScreen /> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
