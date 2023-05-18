import React, { useState, useRef } from "react";
import {
  Share,
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { Feather, EvilIcons, AntDesign, Ionicons,Octicons ,MaterialIcons} from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import InputBox from "../components/InputBox";
import { Avatar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
const CommentScreens = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  // const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [myLike, setMyLike] = useState(null);
  const [likesCount, setLikesCount] = useState(10);
  
  

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const submitLike = () => {
    console.warn("ga lam");
  };

  const onLike = () => {
    
    setMyLike(!myLike)
  };

  const removeLike = () => {
   
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
     
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Avatar
            size={50}
            rounded
            source={"https://uifaces.co/our-content/donated/6MWH9Xi_.jpg"}
            containerStyle={{ backgroundColor: "orange" }}
          />
          <View style={styles.Rightcontainer}>
            <View style={styles.tweetHeaderContainer}>
              <View style={styles.tweetHeaderNames}>
                <Text style={styles.name}>Liên Quân</Text>
                {/* <Text style={styles.name}>{userName}</Text> */}
               
                {/* <Text style={styles.name}>@{name}</Text> */}
              
              </View>
              
              <Entypo
                name={"chevron-down"}
                size={16}
                color={"grey"}
                onPress={() => refRBSheet.current.open()}
              />
              <RBSheet
                ref={refRBSheet}
                height={200}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                  wrapper: {
                    backgroundColor: "transparent",
                  },
                 container:{
                  backgroundColor :"#F6F1F1"
                 }
                  
                }}
              >
               <View style={{ justifyContent: "center", alignContent :"center",margin: 10 }}>
        

               <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :55,alignItems :'center',borderRadius:10}} onPress={() => {refRBSheet.current.close()}}>
                <Entypo name="edit" style={{flex :1 , fontSize: 35 ,marginLeft :10}} />
                  <Text style={{flex:5 ,fontSize:15}}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :55,alignItems :'center',borderRadius:10}} onPress={() => {refRBSheet.current.close()}}>
                <Ionicons name="trash" style={{flex :1 , fontSize: 35 ,marginLeft :10}} />
                  <Text style={{flex:5 ,fontSize:15}}>Delete</Text>
                </TouchableOpacity>

                
                
               </View>
              </RBSheet>
              
            </View>
            <Text style={styles.username}>@caoquan2k1@gmail.com</Text>
            <View>
              <Text style={styles.content}>
                {
                  "<3 oke bạn thân yêu"
                }
              </Text>
              
            </View>
            {/* <Footer tweet={tweet} /> */}
            <View style={styles.Footercontainer2}>
              <View style={styles.FootericonContainer}>
               
                <Text style={styles.Footernumber}>{moment("2023-04-30T12:00:00.000Z").fromNow()}</Text>
                
              </View>
              <View style={styles.FootericonContainer}>
              <AntDesign
                    name={!myLike ? "hearto" : "heart"}
                    size={20}
                    color={!myLike ? "grey" : "red"}
                    style={{marginLeft : 20}}
                    onPress={onLike}
                  />
                
                <Text style={styles.Footernumber}>Like</Text>
              </View>
              <View style={styles.FootericonContainer}>
              <Feather name={"message-circle"} size={20} color={"grey"} style={{marginLeft : 20}}/>
                <Text style={styles.Footernumber}>Reply</Text>
              </View>
             
            </View>
          </View>
        </SafeAreaView>

        
      </ScrollView>
     <InputBox/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: "97%",
    flexDirection: "row",
    marginLeft: 10,
    borderBottomColor: "black",
     borderBottomWidth: 0.5,
     
  
    borderColor: "lightgrey",
    marginTop: 10,
  },
  headerContainer: {
    flex: 1,
    width: "100%",

    padding: 15,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4D9FEC",
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
  Rightcontainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tweetHeaderNames: {
    flexDirection: "row",
  },
  name: {
    marginRight: 5,
    fontWeight: "bold",
  },
  username: {
    marginRight: 5,
    color: "grey",
  },
  createdAt: {
    marginRight: 5,
    color: "grey",
  },
  content: {
    marginTop: 5,
    lineHeight: 18,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  image: {
    marginVertical: 10,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
  },
  Footercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 10,
  },
    Footercontainer2: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 10,
        
    },
  
  FootericonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  FootericonContainer2: {
    flexDirection: "row",
    marginRight :30,
  },
  
  Footernumber: {
    marginLeft: 5,
    color: "grey",
    textAlign: "center",
  },
});
export default CommentScreens;
