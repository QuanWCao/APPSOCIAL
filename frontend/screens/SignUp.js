import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TextInput,TouchableOpacity ,Pressable} from 'react-native'
import React, { useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useDispatch ,useSelector} from 'react-redux';
import { register,registerAdmin } from '../redux/action';
const data_2 = [
  { label: "Male", value: "Male" },
  
  { label: "Female", value: "Female" },
];

const data_1 = [
  { label: "Admin", value: "Admin" },
  
  { label: "User", value: "User" },
];


const SignUpScreen = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [fullname , setFullName] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [password, setPassword] = useState("");
  
  const [value_1, setValue_1] = useState(null);
    const [isFocus_1, setIsFocus_1] = useState(false);
    const [value_2, setValue_2] = useState(null);
    const [isFocus_2, setIsFocus_2] = useState(false);
    const [date, setDate] = useState(moment());
    const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const { err} = useSelector(state => state.msg);
  const handleAdd = () => {
    const FormData = new FormData();
    FormData.append("fullname", fullname);
    FormData.append("emailAddress", emailAddress);
    FormData.append("phoneNumber", phoneNumber);
    FormData.append("password", password);


    if(value_1 == "Admin") {
      registerAdmin(FormData);
    }
    else {
      register(FormData);
    }

  }
  return (
    <SafeAreaView style={{backgroundColor:'#ffffff', flex: 1}}>
      {/* <Loader visible={loading} /> */}
      <ScrollView
        contentContainerStyle={{paddingTop: 20, paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>
          Register
        </Text>
        <Text style={{color: 'grey', fontSize: 18, marginVertical: 10}}>
          Enter Your Details to Register
        </Text>
        <View style={{marginVertical: 20}}>
      
          <View style={{marginBottom: 10}}>
          <Text style={styles.label}>Full Name</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <TextInput

         value={fullname}
          placeholder="FullName"
          // onFocus={() => {
          //   onFocus();
          //   setIsFocused(true);
          // }}
          // onBlur={() => setIsFocused(false)}
          // secureTextEntry={true}
          style={{color: '#7978B5', flex: 1}}
          onChangeText={setFullName}
          
        />


        
      </View>
    </View>

    

    <View style={{marginBottom: 10}}>
          <Text style={styles.label}>Email</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
         <TextInput
          value={emailAddress}
          style={{color: '#7978B5', flex: 1}}
          numberOfLines={1}
          placeholder="Address"
          // placeholderTextColor="#666"
          onChangeText={setEmailAddress}
          // keyboardType={"number-pad"}
          // returnKeyType="done"
        />
        
      </View>
    </View>

    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Number</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <TextInput
          value={phoneNumber}

          numberOfLines={1}
          placeholder="PhoneNumber"
          style={{color: '#7978B5', flex: 1}}
          onChangeText={setphoneNumber}
        />
        
      </View>
    </View>

    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Password</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <TextInput
          value={password}
          placeholder="Password"
          style={{color: '#7978B5', flex: 1}}
          numberOfLines={1}
          onChangeText={setPassword}
        />
        
      </View>
    </View>

    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Role</Text>
          <Dropdown
            style={styles.inputContainer_1}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_1}
            
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Role"
            
            onFocus={() => setIsFocus_1(true)}
            onBlur={() => setIsFocus_1(false)}
            value={value_1}
            onChange={(item) => {
              setValue_1(item.value);
              setIsFocus_1(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
               
                name={isFocus_1 ? "up" : "down"}
                size={20}
              />
            )}
          />
    </View>
    <View style={{flexDirection :'row',justifyContent:"space-between"}}>

    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Gender</Text>
          <Dropdown
            style={styles.inputContainer_2}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_2}
            
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Gender"
            
            onFocus={() => setIsFocus_2(true)}
            onBlur={() => setIsFocus_2(false)}
            value={value_2}
            onChange={(item) => {
              setValue_2(item.value);
              setIsFocus_2(false);
            }}
            renderRightIcon={() => (
              <AntDesign
                style={styles.icon}
                
                name={isFocus_2 ? "up" : "down"}
                size={20}
              />
            )}
          />
    </View>


    <View style={{marginBottom: 20,}}>
          <Text style={styles.label}>Birth</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <Pressable onPress={() => setShow(true)}>
          <View style={{ justifyContent: "center", alignContent: "center" }}>
            <Text>{date.format("DD/MM/YYYY")}</Text>
            {show && (
              <DateTimePicker
                value={new Date()}
                mode={"date"}
                display="default"
                onChange={(event, selectedDate) => {
                  setDate(moment(selectedDate));
                  setShow(false);
                }}
              />
            )}
          </View>

          
        </Pressable>
        </View>
      </View>
    </View>


    <TouchableOpacity
    onPress={() => navigation.navigate('LogIn')}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: '#5D5FEE',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
      Register
      </Text>

      </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('LogIn')}
            style={{
              color: '#000',
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account ? Login
          </Text>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: 'grey',
    fontWeight: 500

  },
  inputContainer: {
    height: 55,
    backgroundColor: '#F3F4FB',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  inputContainer_1: {
    height: 55,
    backgroundColor: '#F3F4FB',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  inputContainer_2: {
    height: 55,
    backgroundColor: '#F3F4FB',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    width :120,
    alignItems: 'center',
  },
  dropdown: {
    margin: "3%",
    //height: 50,
    width: 150,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#CFD2CF",
    borderWidth: 1,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  row2: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-around",
    width: 150,
    height: 40,
    marginRight: "5%",
    marginTop: "1%",
    borderColor: "#CFD2CF",
    borderWidth: 1,
    borderRadius: 5,
  },
})
export default SignUpScreen


