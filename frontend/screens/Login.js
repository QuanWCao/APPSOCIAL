import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { CheckBox } from "@rneui/themed";
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";
import { login ,login_admin } from "../redux/action";
const LoginScreen = () => {
  const [emailAddress, setEmail] = useState("caolienquan_t64@hus.edu.vn");
  const [password, setPassword] = useState("123456aA@");
  const [isHided, setIsHided] = useState(true);
  const navigation = useNavigation();
  const [checked, setChecked] = useState(0);
  const dispatch = useDispatch();

  const { err} = useSelector(state => state.auth);
 
  const loginHandler = () => {
    
    dispatch(login(emailAddress,password));// no tra ve mess thi dung con loi thi quay den chet
    
   
   
  };

  useEffect(() => {
    console.log(err ,emailAddress, password)
    if(err) {
      alert(err)
      dispatch({type : "clearError"})
    }
 
  }, [err , dispatch ,alert,])
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://davidhubbs.files.wordpress.com/2015/04/viking_text.jpg",
        }}
        style={styles.logo}
      />
      <Text style={styles.text}>Vikings Social</Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: "100%",
          // height: windowHeight / 15,

          padding: 5,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
        }}
      >
        <AntDesign name="user" size={25} color="#666" />

        <TextInput
          value={emailAddress}
          style={styles.input}
          numberOfLines={1}
          placeholder="Nhap so dien thoai"
          placeholderTextColor="#666"
          onChangeText={setEmail}
          keyboardType={"number-pad"}
          returnKeyType="done"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          width: "100%",
          // height: windowHeight / 15,
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 3,
        }}
      >
        <AntDesign name="lock" size={25} color="#666" />

        <TextInput
          value={password}
          style={styles.input}
          numberOfLines={1}
          placeholder="Dien mat khau"
          placeholderTextColor="#666"
          secureTextEntry={isHided}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPressIn={() => setIsHided(false)}
          onPressOut={() => setIsHided(true)}
        >
          <View>
            <Icon
              name={isHided == true ? "eye" : "eye-off"}
              size={25}
              color={"#595959"}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 10,
          width: "100%",
          // height: windowHeight / 15,

          padding: 5,
marginBottom:20,
          borderRadius: 3,
        }}
      >
        <Text style={styles.input}>Role</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <View style={{ flex: 1 ,flexDirection: "row",alignItems:"center",justifyContent:"center"}}>
            <Text
              style={{
                fontSize: 16,
             
                color: "#333",
                
               
              }}
            >
              Admin :
            </Text>
            <CheckBox
              checked={checked === 0}
              onPress={() => setChecked(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>

          <View style={{ flex: 1 ,flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
            <Text
              style={{
                fontSize: 16,
                color: "#333",
                
              }}
            >
              User :
            </Text>
            <CheckBox
              checked={checked === 1}
              onPress={() => setChecked(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        // onPress={() => {
        //   if (checked == 1) {
        //     navigation.navigate("home");
        //   } else {
        //     navigation.navigate("Admin");
        //   }
        // }}

        onPress={loginHandler}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => {
          navigation.navigate("EnterNumber");
        }}
      >
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  logo: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
  },
  text: {
    // fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    // fontFamily: 'Lato-Regular',
  },
  buttonContainer: {
    marginTop: 10,
    width: "100%",
    // height: windowHeight / 15,
    backgroundColor: "#2e64e5",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    // fontFamily: 'Lato-Regular',
  },
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%",
    // height: windowHeight / 15,
    borderColor: "#ccc",
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconStyle: {
    padding: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "#ccc",
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    // fontFamily: 'Lato-Regular',
    color: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    // width: windowWidth / 1.5,
    // height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
