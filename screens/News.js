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
const MainContainer = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  // const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [myLike, setMyLike] = useState(null);
  const [likesCount, setLikesCount] = useState(10);
  
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
  const submitLike = () => {
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
    padding: 10}}>
     <View style={{
    flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight:10,justifyContent: "center"}}>
          <Octicons name="three-bars" size={30}/>
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
                <Text style={styles.name}>Quan</Text>
                {/* <Text style={styles.name}>{userName}</Text> */}
                <Text style={styles.username}>@LienQuan</Text>
                {/* <Text style={styles.name}>@{name}</Text> */}
                <Text style={styles.createdAt}>
                  {moment("2020-08-27T12:00:00.000Z").fromNow()}
                </Text>
              </View>
              <EvilIcons
                name={"navicon"}
                size={16}
                color={"grey"}
                onPress={() => refRBSheet.current.open()}
              />
              <RBSheet
                ref={refRBSheet}
                height={300}
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
                <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :50,alignItems :'center',borderRadius:10}}>
                <Ionicons name="add-circle" style={{flex :1 , fontSize: 35 ,marginLeft :10}} />
                  <Text style={{flex:5 ,fontSize:15}}>Save Post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :50,alignItems :'center',borderRadius:10}}>
                <Entypo name="edit" style={{flex :1 , fontSize: 35 ,marginLeft :10}} />
                  <Text style={{flex:5 ,fontSize:15}}>Edit Post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :50,alignItems :'center',borderRadius:10}}>
                <Ionicons name="trash" style={{flex :1 , fontSize: 35 ,marginLeft :10}} />
                  <Text style={{flex:5 ,fontSize:15}}>Delete Post</Text>
                </TouchableOpacity>

                 <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :55,alignItems :'center',borderRadius:10}}>
                <MaterialIcons name="report" style={{flex :1 , fontSize: 35 ,marginLeft :10 }} />
                  <Text style={{flex:5 ,fontSize:15}}>Report Post</Text>
                </TouchableOpacity>
                
               </View>
              </RBSheet>
            </View>
            <TouchableOpacity>
              <Text style={styles.content}>
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
              </Text>
              {!!"https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-8/s960x960/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=svjjE7DUkc0AX9yjcdC&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=1df4116c73c45a32ebad070704ca3333&oe=5F6ECD77" && (
                <Image
                  style={styles.image}
                  source={
                    "https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-8/s960x960/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=svjjE7DUkc0AX9yjcdC&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=1df4116c73c45a32ebad070704ca3333&oe=5F6ECD77"
                  }
                />
              )}
            </TouchableOpacity>
            {/* <Footer tweet={tweet} /> */}
            <View style={styles.Footercontainer}>
              <View style={styles.FootericonContainer}>
                <TouchableOpacity>
                  <AntDesign
                    name={!myLike ? "hearto" : "heart"}
                    size={20}
                    color={!myLike ? "grey" : "red"}
                  />
                </TouchableOpacity>
                <Text style={styles.Footernumber}>{"10"}</Text>
              </View>
              <TouchableOpacity style={styles.FootericonContainer} onPress={() => navigation.navigate("Post Create")}>
                <Feather name={"message-circle"} size={20} color={"grey"} />
                <Text style={styles.Footernumber}>{"123"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.FootericonContainer}>
                <EvilIcons name={"share-apple"} size={28} color={"grey"} />
                <Text style={styles.Footernumber}>{"11"}</Text>
              </TouchableOpacity>
              <View style={styles.FootericonContainer}>
                <EvilIcons name={"eye"} size={28} color={"grey"} />
                <Text style={styles.Footernumber}>{"400"}</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
                {/* comment */}
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
                <Text style={styles.name}>Quan</Text>
                {/* <Text style={styles.name}>{userName}</Text> */}
                <Text style={styles.username}>@LienQuan</Text>
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
                height={300}
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
                <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :50,alignItems :'center',borderRadius:10}}>
                <Ionicons name="add-circle" style={{flex :1 , fontSize: 35 ,marginLeft :10}} />
                  <Text style={{flex:5 ,fontSize:15}}>Save Post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :50,alignItems :'center',borderRadius:10}}>
                <Entypo name="edit" style={{flex :1 , fontSize: 35 ,marginLeft :10}} />
                  <Text style={{flex:5 ,fontSize:15}}>Edit Post</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :50,alignItems :'center',borderRadius:10}}>
                <Ionicons name="trash" style={{flex :1 , fontSize: 35 ,marginLeft :10}} />
                  <Text style={{flex:5 ,fontSize:15}}>Delete Post</Text>
                </TouchableOpacity>

                 <TouchableOpacity style={{backgroundColor:"#ffffff" ,flexDirection : "row",marginBottom:5,height :55,alignItems :'center',borderRadius:10}}>
                <MaterialIcons name="report" style={{flex :1 , fontSize: 35 ,marginLeft :10 }} />
                  <Text style={{flex:5 ,fontSize:15}}>Report Post</Text>
                </TouchableOpacity>
                
               </View>
              </RBSheet>
            </View>
            <View>
              <Text style={styles.content}>
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
              </Text>
              
            </View>
            {/* <Footer tweet={tweet} /> */}
            <View style={styles.Footercontainer}>
              <View style={styles.FootericonContainer}>
                <TouchableOpacity onPress={onLike}>
                  
                </TouchableOpacity>
                <Text style={styles.Footernumber}>{"10"}m</Text>
              </View>
              <View style={styles.FootericonContainer}>
              <AntDesign
                    name={!myLike ? "hearto" : "heart"}
                    size={20}
                    color={!myLike ? "grey" : "red"}
                  />
                
                <Text style={styles.Footernumber}>{"123"}</Text>
              </View>
              <View style={styles.FootericonContainer}>
              <Feather name={"message-circle"} size={20} color={"grey"} />
                <Text style={styles.Footernumber}>{"11"}</Text>
              </View>
             
            </View>
          </View>
        </SafeAreaView>

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
                <Text style={styles.name}>Quan</Text>
                {/* <Text style={styles.name}>{userName}</Text> */}
                <Text style={styles.username}>@LienQuan</Text>
                {/* <Text style={styles.name}>@{name}</Text> */}
                <Text style={styles.createdAt}>
                  {moment("2020-08-27T12:00:00.000Z").fromNow()}
                </Text>
              </View>
              <Entypo
                name={"chevron-down"}
                size={16}
                color={"grey"}
                onPress={removeLike}
              />
            </View>
            <View>
              <Text style={styles.content}>
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                }
              </Text>
              {!!"https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-8/s960x960/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=svjjE7DUkc0AX9yjcdC&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=1df4116c73c45a32ebad070704ca3333&oe=5F6ECD77" && (
                <Image
                  style={styles.image}
                  source={
                    "https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-8/s960x960/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=svjjE7DUkc0AX9yjcdC&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=1df4116c73c45a32ebad070704ca3333&oe=5F6ECD77"
                  }
                />
              )}
            </View>
            {/* <Footer tweet={tweet} /> */}
            <View style={styles.Footercontainer}>
              <View style={styles.FootericonContainer}>
                <TouchableOpacity onPress={onLike}>
                  <AntDesign
                    name={!myLike ? "hearto" : "heart"}
                    size={20}
                    color={!myLike ? "grey" : "red"}
                  />
                </TouchableOpacity>
                <Text style={styles.Footernumber}>{"10"}</Text>
              </View>
              <View style={styles.FootericonContainer}>
                <Feather name={"message-circle"} size={20} color={"grey"} />
                <Text style={styles.Footernumber}>{"123"}</Text>
              </View>
              <View style={styles.FootericonContainer}>
                <EvilIcons name={"retweet"} size={28} color={"grey"} />
                <Text style={styles.Footernumber}>{"11"}</Text>
              </View>
              <View style={styles.FootericonContainer}>
                <EvilIcons name={"share-google"} size={28} color={"grey"} />
              </View>
            </View>
          </View>
        </SafeAreaView>
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
