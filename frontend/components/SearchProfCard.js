import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SearchProfCard = ({id,name,verified,prof}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftCont}>
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, margin: 8 }}
          source={{
            uri: prof,
          }}
        />
      </View>
      <View style={styles.rightCont}>
        <View style={styles.topCont}>
          <View style={styles.nameCont}>
            <Text style={styles.nameText}>{name}</Text>
            {verified&&<MaterialIcons
              name="verified"
              color="black"
              size={20}
            />}
            <Text style={styles.idText}>@{id}</Text>
          </View>
        </View>
        </View>
    </TouchableOpacity>
  )
}

export default SearchProfCard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop:15,
      },
      rightCont: {
        flex: 1,
        paddingTop: 6,
        paddingBottom: 5,
        marginLeft: 5,
        flexDirection: "column",
        justifyContent:"center",
      },
      nameCont: {
        flexDirection: "row",
        alignItems: 'center'
      },
      actionCont:{
        marginTop:10,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        marginRight:15
      },
      iconCont:{
        flexDirection:"row"
      },
      topCont: {
        flex: 1,
      },
      text: {
        color: "white",
      },
      nameText: {
        color: "black",
        fontWeight: "bold",
        marginRight: 5,
      },
      idText: {
        marginLeft: 5,
        color: "gray",
      },
      tweetText: {
        color: "#DDDFDF",
      },
      topCont: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      tweetCont: {
        paddingRight: 15,
      },
})