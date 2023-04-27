import {
    View,
    Text,
    ScrollView,
    Alert,
    SafeAreaView,
    FlatList,
    Platform,
    Linking,
    StyleSheet,
    TouchableOpacity
  } from "react-native";
  import React, { useEffect, useMemo, useState } from "react";
  import Icon from "react-native-vector-icons/FontAwesome";
  import { TextInput } from "react-native-gesture-handler";
  import { Avatar } from "@rneui/themed";
  
  import { useNavigation, useRoute } from "@react-navigation/native";

  import moment from "moment";
  
  import { SearchBar } from "react-native-elements";

const ListAccount = () => {
 
    return (
        <SafeAreaView style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
       
        <View style={styles.view2}>
        
          <View style={styles.hang}>
            <View style={styles.avt}>
              <Avatar size={50} rounded source={{ uri:  "https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/380px-Chelsea_crest.svg.png"}}></Avatar>
            </View>
            <TouchableOpacity style={styles.khoiUser}>
              <Text style={styles.user}>Lien Quan</Text>
              <Text>@Quandz</Text> 
            </TouchableOpacity>
            <View style={{flexDirection: "row",alignItems:"center"}}>
            <Icon
              name="edit"
              size={25}
              style={styles.iconPhone}    
              onPress={{}}      
            />
          <Icon
              name="trash"
              size={25}
              style={styles.iconPhone}    
              onPress={{}}        
            />
            </View>
          </View>
          <View style={styles.kengang}/>
          
        </View>
        
        <View style={styles.view2}>
          <View style={styles.hang}>
            <View style={styles.avt}>
              <Avatar size={50} rounded source={{ uri:  "https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/380px-Chelsea_crest.svg.png"}}></Avatar>
            </View>
            <TouchableOpacity style={styles.khoiUser}>
              <Text style={styles.user}>Lien Quan</Text>
              <Text>@Quandz</Text> 
            </TouchableOpacity>
            <View style={{flexDirection: "row",alignItems:"center"}}>
            <Icon
              name="edit"
              size={25}
              style={styles.iconPhone}          
            />
          <Icon
              name="trash"
              size={25}
              style={styles.iconPhone}          
            />
            </View>
          </View>
          <View style={styles.kengang}/>
          
        </View>
        
      </SafeAreaView>
    )
}
export default ListAccount;
const styles = StyleSheet.create({
    view: {
        backgroundColor: "white",
        flex: 1,
      },
      row: {
        flexDirection: "row",
      
      },
      view2: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        width: "100%",
        marginTop: "1%",
        borderRadius: 10,
      },
      hang: {
        flexDirection: "row",
        borderRadius: 5,
        margin: "3%",
        
      },
      avt: {
        marginTop: "1%",
       
      },
      khoiUser: {
        flexDirection: "column",
      
        marginLeft: "5%",
        
        width: "60%",
      },
      user: {
        fontSize: 16,
        
        marginTop: "2%",
      },
      iconPhone: {
        marginTop: "3%",
       
        marginRight: "15%"
      },
  
      kengang: {
        borderBottomColor: "#f2f2f2",
        borderBottomWidth: 1,
        width: "100%",

      },
 
  })
