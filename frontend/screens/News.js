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

import { Avatar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import Post from "../components/Post";

const MainContainer = () => {
  const navigation = useNavigation();
  // const refRBSheet = useRef();
  // // const [tweets, setTweets] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(null);
  // const [myLike, setMyLike] = useState(null);
  // const [likesCount, setLikesCount] = useState(10);
  
  // const [id , setId] = useState(tweet.id);
  // const [userName, setUserName] = useState(tweet.user.username);
  //  const [name, setname] = useState(tweet.user.name);
  //  const [userId, setUserId] = useState(tweet.user.id);
  //  const [userImage, setUserImage] = useState(tweet.user.image);
  //  const [createAt, setCreateAt] = useState(tweet.createdAt);
  //  const [content , setContent] = useState(tweet.content);
  //  const [image, setImage] = useState(tweet.image);
  //  const [comment, setComment] = useState(tweet.numberOfComments);
  //  const [reweets, setReweets] = useState(numberOfRetweets);
  //  const [like, setLike] = useState(numberOfLikes)

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
  const HandleLike = () => {
    console.warn("ga lam");
  };

  const onLike = () => {
    Alert.Alert("ha");
  };

  const removeLike = () => {
    Alert.Alert("ha");
  };
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor :"pink",
        // marginTop : 10
      }}
    >
     <View style={{ width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"#ffffff",
    padding: 10}}>
     <View style={{
    flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight:10,justifyContent: "center"}}>
        <Avatar
            size={40}
            rounded
            source={{uri :"https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/280727990_1379564759214526_3554061026221242893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iW4oZbsxYTQAX8Y3Rum&_nc_ht=scontent.fhan14-3.fna&oh=00_AfA9B_wSXNu5vEu9hKDcY63_J37IO0Wsd3xHUryCdqMC8A&oe=645A85A0"}}
            
          />
        </TouchableOpacity>
        <Text style={{fontSize : 30,fontWeight: 'bold',justifyContent: "center"}}> Vikings </Text>
        </View>
        <View style={{
    flexDirection: 'row'}}>
        <TouchableOpacity style={{
    borderRadius: 30,marginRight: 5,width: 40 ,
 height:40,
 borderRadius :40,
 flexDirection : "row",
 justifyContent :'center',
 alignItems :"center",
 }}
 onPress={() => navigation.navigate('Post Create')}>
        

      <Ionicons name = "add-circle" size={40}color="#4D9FEC"/>

        </TouchableOpacity>  
        </View>
      </View>
      <ScrollView>
       <Post />
      </ScrollView>
      {/* <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: "#4D9FEC",
        position: "absolute",
        bottom: 100,
        right: 50,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onLike}
    >
    <MaterialCommunityIcons name="post-outline" size={40} color="black" />
    </TouchableOpacity> */}

      {/* <FAB
        title="Chấm công"
        placement="right"
        size="small"
        titleStyle={{fontSize : 14}}
        color="##4D9FEC"
        buttonStyle={{
    width: 150,
    height: 50,
  }}
        onPress={onLike}
      /> */}
    </View>
  );
};

// const Feed = () => {
//   return (
// <View style={{width: '100%'}}>
// <StatusBar
//         backgroundColor="white"
//         barStyle="dark-content"
//         animated={true}
//       />
//       <View
//         style={{
//           justifyContent: 'space-between',
//           flexDirection: 'row',
//           paddingHorizontal: 15,
//           alignItems: 'center',
//         }}>
//         <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
//         <Text
//           style={{
//             fontFamily: 'Lobster-Regular',
//             fontSize: 25,
//             fontWeight: '500',
//           }}>
//           Instagram
//         </Text>
//         <Feather name="navigation" style={{fontSize: 24}} />
//       </View>

//       <FlatList
//         data={tweets}
//         renderItem={({item}) => (
//           <MainContainer/>
//         )
//         keyExtractor={(item) => item.id}

//       />
//     </View>
//   );
// }

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
  FootericonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  
  Footernumber: {
    marginLeft: 5,
    color: "grey",
    textAlign: "center",
  },
});
export default MainContainer;
