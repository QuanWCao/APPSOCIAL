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
const account = [
  {
      useName :'Liên Quân',
      email: "caolienquan_t64@hus.edu.vn",
      image : "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/280727990_1379564759214526_3554061026221242893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfynfrejHHJNPpkIQ49N1sISRcgeGi-NMhJFyB4aL40_kp2nPl2fOw8munXp_Oeg2QI_ybyaeyBjH_lgXrYRBW&_nc_ohc=CSmkVXjnbcYAX8PUdAl&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAP_5cm7wUknuOe2xfS1ursOHZw0rmNZj-9sigsBp2UzQ&oe=645E7A20",
 
  },
  {
    useName :'Công Đặng',
    email: "dangphanthanh_t64@hus.edu.vn",
    image : "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/297308503_1757015771329096_1876572072439857006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEQNEtJgJMtmyKKRYshkI-0kI8dX5jJTgeQjx1fmMlOB-C1LBGO4w9u8fj1_xFt0ZNXTDU0vD9njIsBeCqWvxXl&_nc_ohc=U-TfQqCYCuEAX_ISrsx&_nc_ht=scontent.fhan2-5.fna&oh=00_AfC9zXLBD3N3Mh3tbQx1UAnm9ej0TbA6UvzKITQSWPo3hw&oe=645F4EE7",
},
{
  useName :'Khánh Dũng',
  email: "nguyenngocdung_t64@hus.edu.vn",
  image : "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/102466134_1111446205894337_6336430928374779099_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHQBPxzBQwgrJn3xhNuQyPwKgllFcLXBqgqCWUVwtcGqGYfHNGvlHGF6_O2a_k74SGMsRObi5n4eQFpCwTjPkWr&_nc_ohc=UcWu5qh177IAX_9XDUK&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDBZKkZABS1WPsQBRnkpkobNr9fNFofpxXa-QiqXNo70w&oe=6485C046",
},
  

];
const [search, setSearch] = useState("");
const navigation = useNavigation();
  return (
  
    <View>
    <View style={{
    flexDirection: "row",
    marginTop: "3%",
  }}>
      <View style={{
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f2f2f2",
  }}>
        <Icon
          name="chevron-left"
          size={20}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={ {
    flexDirection: "row",
    flex: 1,
    margin: 10,
    borderRadius: 10,
    padding: 5,
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
  }}>
        <Icon name="search" size={20} style={{
    padding: 5,
    color: "gray",
  }} />

        <TextInput
          style={{
    alignItems: "center",
    marginLeft: 10,
    fontSize: 14,
    width: "80%",
    
  }}
          placeholder="Tìm kiếm"
          returnKeyType="done"
          onChangeText={(text) => {
            
            setSearch(text);
          }}
          value={search}
          
        ></TextInput>
      </View>
      <View style={{
    margin: 10,
  }}>
        <Icon
          name="plus-circle"
          size={40}
          color="#4D9FEC"
          // onPress={{}}
        />
      </View>
    </View>
    {account.map((data, index) => {
        
    return (
        
      <SafeAreaView key={index} style={{ padding: 10, backgroundColor: "#f2f2f2" }}>
     
      <View style={styles.view2}>
      
        <View style={styles.hang}>
          <View style={styles.avt}>
            <Avatar size={50} rounded source={{uri : data.image}}></Avatar>
          </View>
          <TouchableOpacity style={styles.khoiUser}>
            <Text style={styles.user}>{data.useName}</Text>
            <Text>{data.email}</Text> 
          </TouchableOpacity>
          <View style={{flexDirection: "row",alignItems:"center", marginLeft: 15}}>
          <Icon
            name="edit"
            size={25}
            style={styles.iconPhone}    
            onPress={{}}      
          />
        <Icon
            name="trash"
            size={25}
            style={styles.iconPhone1}    
            onPress={{}}        
          />
          </View>
        </View>
        <View style={styles.kengang}/>
        
      </View>
      
      
      
    </SafeAreaView>
    );
    })}
    </View>
     
);
};
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
     
      marginRight: "10%"
    },
    iconPhone1: {
      marginTop: "3%",
     
      marginRight: "10%",
      color:"red"

    },

    kengang: {
      borderBottomColor: "#f2f2f2",
      borderBottomWidth: 1,
      width: "100%",

    },

})
