import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TextInput,TouchableOpacity } from 'react-native'
import React, { useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
const ChangePassWord = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();

  const Update = () => {
    
    navigation.navigate("home")

  }
  return (
    <SafeAreaView style={{backgroundColor:'#ffffff', flex: 1}}>
      {/* <Loader visible={loading} /> */}
      <ScrollView
        style={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Change PassWord
        </Text>
        
        <View style={{marginVertical: 10}}>
        
         

          <View style={{marginBottom: 10}}>
          
      <View
        style={styles.inputContainer}>
      
        <TextInput
          onChangeText={email}
          placeholder="Enter your old password"
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
          
          <View
            style={styles.inputContainer}>
            
            <TextInput
              onChangeText={password}
              placeholder="Enter your new password"
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
        <View style={{marginBottom: 10}}>
          
          <View
            style={styles.inputContainer}>
          
            <TextInput
              onChangeText={password}
              placeholder="Confirm your new password"
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
    onPress={Update}
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
      Confirm
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
  inputContainer: {
    height: 50,
    backgroundColor: '#F3F4FB',
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: 'center',
  },
})
export default ChangePassWord


