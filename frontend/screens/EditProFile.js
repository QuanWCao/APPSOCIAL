import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
const EditProfile = () => {
  const navigation = useNavigation();
  const TostMessage = () => {
    ToastAndroid.show("Edited Sucessfully !", ToastAndroid.SHORT);
  };
  const [fullname, setFullName] = useState("");
  const [birth , setBirth] = useState("");
  const [address , setAddress] = useState("");
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Male", value: "Male" },
    
    { label: "Female", value: "Female" },
  ];
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="close-outline" style={{ fontSize: 35 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Edit Profile</Text>
        <TouchableOpacity
          onPress={() => {
            TostMessage();
            navigation.navigate("Profile");
          }}
        >
          <Ionic name="checkmark" style={{ fontSize: 35, color: "#3493D9" }} />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/380px-Chelsea_crest.svg.png",
          }}
          style={{ width: 80, height: 80, borderRadius: 100, marginBottom: 20 }}
        />
        <Text
          style={{
            color: "#3493D9",
          }}
        >
          Change profile photo
        </Text>
      </View>
      <View style={{ marginBottom: 10 ,marginHorizontal:10 }}>
        <View
          style={{
            height: 30,
            flexDirection: "row",
            paddingHorizontal: 15,
            marginVertical: 10,
            borderBottomWidth: 0.5,
            alignItems: "center",
          }}
        >
          <View style={{ marginRight: 20 }}>
            <Text>FullName</Text>
          </View>
          <View>
            <TextInput
              onChangeText={fullname}
              placeholder="Name"
              style={{ color: "#7978B5", flex: 1 }}
            />
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 10 ,marginHorizontal:10 }}>
        <View
          style={{
            height: 30,
            flexDirection: "row",
            paddingHorizontal: 15,
            marginVertical: 10,
            borderBottomWidth: 0.5,
            alignItems: "center",
          }}
        >
          <View style={{ marginRight: 20 }}>
            <Text>Birth</Text>
          </View>
          <View>
            <TextInput
              onChangeText={birth}
              placeholder="Birth"
              style={{ color: "#7978B5", flex: 1 }}
            />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 10 ,marginHorizontal:10 }}>
        <View
          style={{
            height: 30,
            flexDirection: "row",
            paddingHorizontal: 15,
            marginVertical: 10,
            borderBottomWidth: 0.5,
            alignItems: "center",
          }}
        >
          <View style={{ marginRight: 20 }}>
            <Text>Address</Text>
          </View>
          <View>
            <TextInput
              onChangeText={address}
              
              placeholder="Address"
              style={{ color: "#7978B5", flex: 1 }}
            />
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 10 ,marginHorizontal:10 ,flexDirection:"row"}}>
      <View
          style={{
            height: 30,
            flexDirection: "row",
            paddingHorizontal: 15,
            marginVertical: 10,
            borderBottomWidth: 0.5,
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ marginRight: 20 }}>
            <Text>Sex</Text>
          </View>
          <View>
          <Dropdown
            style={{
    height: 20,
    backgroundColor: '#F3F4FB',
    paddingHorizontal: 15,
    
    width :120,
    alignItems: 'center',
  }}
          
            
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Sex"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            value={value}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={{
    marginRight: 5,
  }}
                
                name={isFocus ? "up" : "down"}
                size={20}
              />
            )}
          />
             
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
