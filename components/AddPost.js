import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import moment from "moment";
import * as Device from 'expo-device';

const NewPostButton = () => {
  
    const onPress = () => {
        console.warn('ga lam');
    }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: "#ffffff",
        position: "absolute",
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
    
      <MaterialCommunityIcons name={"feather"} size={30} color="black" />
    </TouchableOpacity>
  );
};
export default NewPostButton;
