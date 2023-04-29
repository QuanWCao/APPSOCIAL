import { StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import React from 'react'

const NotificationCard = ({type,pic,title,desc,color}) => {
  return (
    <TouchableOpacity style={styles.container}>

      <View style={styles.leftCont}>
        <MaterialCommunityIcons name={type} size={25} color={color}  />
      </View>

      <View style={styles.rightCont}>
      <View style={styles.picCont}>
        {pic&&pic.map(dat=>
        <Image 
          source={{uri:dat}}
          style={{height:40,width:40,borderRadius:40}}
        />
          )}
      </View>
      <View style={styles.titleCont}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <Text style={styles.desctext}>{desc}</Text>
      </View>
      
      </View>
    </TouchableOpacity>
  )
}

export default NotificationCard

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    paddingRight:20,
    paddingTop:10,
    paddingBottom:10,
    borderBottomColor:"#fff",
    borderBottomWidth:1,
    backgroundColor: '#d5ebfc'
  },
  leftCont:{
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingRight:15,
    flex:1,
    paddingTop: 5
  },
  rightCont:{
    flex:4,
  },
  picCont:{
    flexDirection:"row",
    marginBottom:10,
  },
  titleCont:{
    marginBottom:10,
  },
  text:{
    color:"black",
    paddingRight:20,
  },
  desctext:{
    color:"gray"
  }
})