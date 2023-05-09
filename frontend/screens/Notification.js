import { StyleSheet, Text,Image, View, ScrollView, Touchable } from 'react-native'
import React,{useEffect} from 'react'
import NotificationCard from '../components/NotificationCard'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NotificationData } from '../components/data/data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const Notification = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style = {styles.titleText}>Notification</Text>
          <TouchableOpacity style= {styles.settingIcon}>
          <Ionicons name="search" size={30} color={"black"} />
          </TouchableOpacity>
      </View>
      <View>
        <Text style = {styles.subTitleText}>Recent</Text>
      </View>

      <ScrollView style={{borderTopWidth: 1, borderColor: '#E1E8ED'}}>
      {NotificationData.map(dat=>
        <NotificationCard id={dat.id} type={dat.type}
          pic={dat.pic}
          title={dat.title}
          desc={dat.desc}
          color={dat.color}
        />
        )}
      </ScrollView>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  header:{
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 10,
   
  },
  titleText:{
    marginLeft: 15,
    fontSize: 25,
    fontWeight: 700,
    color: '#14171A'
  },
  subTitleText:{
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 2,
  },
  settingIcon:{
    marginRight:15,
    marginLeft: 5,
    color:"black",
    backgroundColor:"#E1E8ED",
    borderRadius :100,
    height:40,
    width:40,
    justifyContent:"center",
    alignItems:"center"
    
  },
  accIcon:{
    height:40,
    width:40,
    borderRadius:50,
    marginLeft:10,
    marginRight: 5
  }
})