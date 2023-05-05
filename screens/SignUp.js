import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TextInput,TouchableOpacity ,Pressable} from 'react-native'
import React, { useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
const data_2 = [
  { label: "Nam", value: "Male" },
  
  { label: "Nữ", value: "Female" },
];

const data_1 = [
  { label: "Admin", value: "Admin" },
  
  { label: "User", value: "User" },
];


const SignUpScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [value_1, setValue_1] = useState(null);
    const [isFocus_1, setIsFocus_1] = useState(false);
    const [value_2, setValue_2] = useState(null);
    const [isFocus_2, setIsFocus_2] = useState(false);
    const [date, setDate] = useState(moment());
    const [show, setShow] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor:'#ffffff', flex: 1}}>
      {/* <Loader visible={loading} /> */}
      <ScrollView
        contentContainerStyle={{paddingTop: 20, paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>
          Đăng ký
        </Text>
        <Text style={{color: 'grey', fontSize: 18, marginVertical: 10}}>
          Thông tin chi tiết
        </Text>
        <View style={{marginVertical: 20}}>
      
          <View style={{marginBottom: 10}}>
          <Text style={styles.label}>Họ và tên</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <TextInput
          onChangeText={email}
          placeholder="Nhập họ và tên"
          // onFocus={() => {
          //   onFocus();
          //   setIsFocused(true);
          // }}
          // onBlur={() => setIsFocused(false)}
          // secureTextEntry={true}
          style={{color: '#7978B5', flex: 1}}
          
        />


        
      </View>
    </View>

    <View style={{marginBottom: 10}}>
          <Text style={styles.label}>Tên tài khoản</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <TextInput
          onChangeText={email}
          placeholder="Nhập tên tài khoản"
          // onFocus={() => {
          //   onFocus();
          //   setIsFocused(true);
          // }}
          // onBlur={() => setIsFocused(false)}
          // secureTextEntry={true}
          style={{color: '#7978B5', flex: 1}}
          
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
          onChangeText={email}
          placeholder="Nhập Email"
          // onFocus={() => {
          //   onFocus();
          //   setIsFocused(true);
          // }}
          // onBlur={() => setIsFocused(false)}
          // secureTextEntry={true}
          style={{color: '#7978B5', flex: 1}}
          
        />
        
      </View>
    </View>

    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Mật khẩu</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <TextInput
          onChangeText={email}
          placeholder="Nhập mật khẩu"
        
          style={{color: '#7978B5', flex: 1}}
          
        />
        
      </View>
    </View>

    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Xác nhận mật khẩu</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <TextInput
          onChangeText={email}
          placeholder="Xác nhận mật khẩu"
        
          style={{color: '#7978B5', flex: 1}}
          
        />
        
      </View>
    </View>

    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Chức vụ</Text>
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
            placeholder="Chức vụ"
            
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

    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Giới tính</Text>
          <Dropdown
            style={styles.inputContainer_1}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data_2}
            
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Giới tính"
            
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


    <View style={{marginBottom: 20}}>
          <Text style={styles.label}>Ngày sinh</Text>
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
                value={new Date(date.format("YYYY/MM/DD"))}
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
      Đăng ký
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
            Bạn đã có tài khoản? Đăng nhập
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
    color: '#BABBC3',
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


