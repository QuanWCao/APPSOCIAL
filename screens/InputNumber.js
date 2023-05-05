import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React, { useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
const InputNumber = () => {
  const [email, setEmail] = useState("v");
  const navigation = useNavigation();

  const [password, setPassword] = useState();
  return (
    <SafeAreaView style={{backgroundColor:'#ffffff', flex: 1}}>
      {/* <Loader visible={loading} /> */}
      <ScrollView
        style={{paddingTop: 50, paddingHorizontal: 20}}>
       
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
        Nhập số điện thoại
        </Text>
        
        
        <View style={{marginVertical: 10, paddingTop: 10}}>
        
         

          
    <View style={{marginBottom: 10, flexDirection :'row'}}>
          
          <View
            style={styles.inputContainer1}>
            {/* <Icon
              name="account-outline"
              style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
            /> */}
            <TextInput
              onChangeText={password}
              placeholder="Nhập số điện thoại"
              // onFocus={() => {
              //   onFocus();
              //   setIsFocused(true);
              // }}
              // onBlur={() => setIsFocused(false)}
              secureTextEntry={true}
              style={{color: '#7978B5', flex: 1}}
              
            />
          </View>
          
        </View>
        

    


    <TouchableOpacity
       onPress={() => {navigation.navigate("Nhận OTP")}}
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
      Xác nhận
      </Text>

      </TouchableOpacity>
          



         
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
  inputContainer1: {
    height: 50,
    backgroundColor: '#F3F4FB',
    flex :3,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    marginRight : 5
  },
  inputContainer2: {
    height: 50,
    backgroundColor: '#F3F4FB',
    flex:1,
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  },
})
export default InputNumber


