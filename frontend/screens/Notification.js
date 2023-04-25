import { StyleSheet, Text,Image, View, ScrollView, Touchable } from 'react-native'
import React,{useEffect} from 'react'
import NotificationCard from '../components/NotificationCard'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NotificationData } from '../components/data/data';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Notification = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style= {styles.accIcon}>
            <Image
              style={{height:40,width:40,borderRadius:50,}}
              source={{uri:"https://lh3.googleusercontent.com/ogw/AOh-ky2cWsAILwBTX3_R494N5SH1ZlXSfUd5xOx93gTJNg=s32-c-mo"}}
          />
          </TouchableOpacity>
          <Text style = {styles.titleText}>Thông báo</Text>
          <TouchableOpacity style= {styles.settingIcon}>
              <MaterialIcons name='settings' color={"black"} size={35}  />
          </TouchableOpacity>
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
    marginBottom: 10,
    
   

  },
  titleText:{
    textAlignVertical:'center',
    fontSize: 30,
    fontWeight: 400,
    color: '#14171A'
  },
  settingIcon:{
    marginRight:15,
    marginLeft: 5,
    color:"black",
    
  },
  accIcon:{
    height:40,
    width:40,
    borderRadius:50,
    marginLeft:10,
    marginRight: 5
  }
})