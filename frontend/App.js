import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";


import NewTweetScreen from "./screens/CreatPost";
import MainContainer from "./screens/News";
import NewPostButton from "./components/AddPost";

import Navigation from "./navigation";
import { NavigationContainer } from "@react-navigation/native";


import LoginScreen from "./screens/Login";
import SignupScreen from "./screens/SignUp";
import ChangePassWord from "./screens/ChangePassWord";
import ResetPassWord from "./screens/ResetPassWord";
import OTP from "./screens/OTP";
import ProfileScreen from "./screens/Profile";



import EditProfile from "./screens/EditProFile";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Feed /> */}
      {/* <NavigationContainer> */}
        {/* <OTP /> */}
        
        {/* <MainContainer/> */}
        
              {/* <SignupScreen/>  */}
        <Navigation/> 
       {/* </NavigationContainer> */}
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
