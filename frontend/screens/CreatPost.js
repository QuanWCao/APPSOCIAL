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


export default function NewTweetScreen() {
  const navigation = useNavigation();
  

  const [tweet, setTweet] = useState("");
  const [imageUrl, setImageUrl] = useState("");


 
  

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        setImageUrl(result.uri);
      }

      
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
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <AntDesign name="close" size={30} color='#4D9FEC' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
        
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
      <Avatar 
          size={50}
              rounded
              source={{uri:'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/280727990_1379564759214526_3554061026221242893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfynfrejHHJNPpkIQ49N1sISRcgeGi-NMhJFyB4aL40_kp2nPl2fOw8munXp_Oeg2QI_ybyaeyBjH_lgXrYRBW&_nc_ohc=CSmkVXjnbcYAX8PUdAl&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAP_5cm7wUknuOe2xfS1ursOHZw0rmNZj-9sigsBp2UzQ&oe=645E7A20' }}
             />
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            onChangeText={(value) => setTweet(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder={"What's happening?"}
          />
          
         
        </View>

      </View>
      <View>
        <Image source={{uri :imageUrl }} style={styles.image} />
        </View>
      <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: "#4D9FEC",
        position: "absolute",
        bottom: 20,
        right: 50,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={pickImage}
    >
    <FontAwesome name="photo" size={40} color="#ffffff" />
    </TouchableOpacity>
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
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
    
  },
  inputsContainer: {
    marginLeft: 10,
    marginRight:40,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 18,
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