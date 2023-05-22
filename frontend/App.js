import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";

import Te from "./screens/Te";
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

import { Provider } from "react-redux";
import store from "./redux/store";

import InputBox from "./components/InputBox";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Search from "./screens/Search";
import ListAccount from "./screens/AdminManager.js/ListAccount";
import Notification from './screens/Notification';
import Profile from "./screens/Profile";
import { Input } from "react-native-elements";
import Post from "./components/Post";

export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
    <Navigation/>
      
     
     
     
    </SafeAreaView>
    </Provider>
    // <Provider store={store}>
    // <SafeAreaView style={styles.container}>
   
    // <NavigationContainer>
    //   <MainContainer/>
    // </NavigationContainer>
   
    // </SafeAreaView>
    //  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
