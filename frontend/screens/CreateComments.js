import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Platform,
  Image,
  Text,
  View,
} from 'react-native';

import { Avatar } from "@rneui/themed";

import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import moment from "moment";
import * as Device from 'expo-device';
import { useNavigation } from "@react-navigation/native";


export default function CreateComment() {
  const navigation = useNavigation();
  

  const [tweet, setTweet] = useState("");
  


  const getPermissionAsync = () => {
    console.warn('ga lam');
  };

  

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImageUrl(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };


  const uploadImage =  () => {
    console.warn('ga lam');
  }

  const onPostTweet = () => {
    console.warn('ga lam');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={{justifyContent:"center"}} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText1}>Huy bo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Comment")}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
      <Avatar 
          size={50}
              rounded
              source={'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg' }
            containerStyle={{ backgroundColor: "orange" }}
             />
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"Reply to @user"}
          />
          {/* <TouchableOpacity onPress={pickImage}>
            <Text style={styles.pickImage}>Pick a image</Text>
          </TouchableOpacity> */}
         
        </View>

      </View>
     
    
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    backgroundColor: '#4D9FEC',
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonText1: {
   
    paddingVertical: 10,
    
    fontWeight: 'bold',
    fontSize: 16
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  pickImage: {
    fontSize: 18,
    color: '#4D9FEC',
    marginVertical: 10,
  },
  image: {
   height :400,
   width : 400,
  }
});