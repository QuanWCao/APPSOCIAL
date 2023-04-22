import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React, { useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
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
        
          {/* <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          /> */}

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
          placeholder="Nhap so dien thoai"
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
          placeholder="Nhap so dien thoai"
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
          placeholder="Nhap so dien thoai"
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
          <Text style={styles.label}>Email</Text>
      <View
        style={styles.inputContainer}>
        <Icon
          name="account-outline"
          style={{color: '#7978B5', fontSize: 22, marginRight: 10,}}
        />
        <TextInput
          onChangeText={email}
          placeholder="Nhap so dien thoai"
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
})
export default SignUpScreen


