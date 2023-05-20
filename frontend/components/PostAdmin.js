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
  Modal,
  Pressable,
  Animated,
} from "react-native";
import axios from "axios";
import { Feather, EvilIcons, AntDesign, Ionicons,Octicons ,MaterialIcons} from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import moment from "moment";

import { Avatar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

const PostAdmin = () => {
    const postInfo = [
        {
          id :1,
            useName :'Liên Quân',
          postTitle: '30/4 - 1/5 công ty mình nghỉ 5 ngày nhé! \nChúc các bạn có kì nghỉ vui vẻ'
          ,email : "caoquan2k1@gmail.com",
          time : "2023-04-30T12:00:00.000Z",
          postPersonImage: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/280727990_1379564759214526_3554061026221242893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfynfrejHHJNPpkIQ49N1sISRcgeGi-NMhJFyB4aL40_kp2nPl2fOw8munXp_Oeg2QI_ybyaeyBjH_lgXrYRBW&_nc_ohc=CSmkVXjnbcYAX8PUdAl&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAP_5cm7wUknuOe2xfS1ursOHZw0rmNZj-9sigsBp2UzQ&oe=645E7A20",

         postImage:"https://cdn.tgdd.vn/Files/2022/02/12/1415152/lich-nghi-le-30-4-1-5-nam-2023-nghi-5-ngay-lien-tiep-202304180830209689.jpg",
        
          likes: 3,
          isLiked: false,
          comments: 1,
        },
        {
          id :2,
            useName :'Khánh Dũng',
          postTitle: 'Hello ae',
          email : "nguyenngocdung_t64@hus.edu.vn",
          time : "2023-04-25T12:00:00.000Z",
          postPersonImage: "https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/102466134_1111446205894337_6336430928374779099_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHQBPxzBQwgrJn3xhNuQyPwKgllFcLXBqgqCWUVwtcGqGYfHNGvlHGF6_O2a_k74SGMsRObi5n4eQFpCwTjPkWr&_nc_ohc=tDCpofSq_dEAX_Mxyk7&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDDrGIP5XpOzo1YuZ1OrC4ipuu-9G9BIOd2CZfbek7dfg&oe=6481CBC6",
        //   postPersonImage: require('../../storage/images/userProfile.png'),
          postImage: "https://i.pinimg.com/originals/9e/a7/2e/9ea72ef078139ced289852e8a4ea0c5c.gif",
          likes: 5,
          isLiked: false,
          comments: 5,
        },
        {
          id :3,
            useName :'Liên Quân',
          postTitle: 'Đây là app mà đầu tiên mà chúng ta cùng viết nhé',
          email : "caoquan2k1@gmail.com",
          time : "2023-04-25T12:00:00.000Z",
          postPersonImage: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/280727990_1379564759214526_3554061026221242893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfynfrejHHJNPpkIQ49N1sISRcgeGi-NMhJFyB4aL40_kp2nPl2fOw8munXp_Oeg2QI_ybyaeyBjH_lgXrYRBW&_nc_ohc=CSmkVXjnbcYAX8PUdAl&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAP_5cm7wUknuOe2xfS1ursOHZw0rmNZj-9sigsBp2UzQ&oe=645E7A20",
        //   postPersonImage: require('../../storage/images/userProfile.png'),
        postImage: "https://images.theconversation.com/files/156529/original/image-20170213-23331-vsydk4.jpg?ixlib=rb-1.1.0&rect=0%2C498%2C4896%2C2374&q=45&auto=format&w=1356&h=668&fit=crop",
          likes: 3,
          isLiked: false,
          comments: 5,
        },
        {id :4,
        useName :'Liên Quân',
        postTitle: 'Test App',
        email : "caoquan2k1@gmail.com",
        time : "2023-04-22T12:00:00.000Z",
        postPersonImage: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/280727990_1379564759214526_3554061026221242893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfynfrejHHJNPpkIQ49N1sISRcgeGi-NMhJFyB4aL40_kp2nPl2fOw8munXp_Oeg2QI_ybyaeyBjH_lgXrYRBW&_nc_ohc=CSmkVXjnbcYAX8PUdAl&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAP_5cm7wUknuOe2xfS1ursOHZw0rmNZj-9sigsBp2UzQ&oe=645E7A20",
        //   postPersonImage: require('../../storage/images/userProfile.png'),
        postImage: "https://davidhubbs.files.wordpress.com/2015/04/viking_text.jpg",
          likes: 1,
          isLiked: false,
          comments: 2,
        },

      ];
    
  const navigation = useNavigation();
//   const refRBSheet = useRef();
  // const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
//   const [myLike, setMyLike] = useState(null);

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
  const HandleLike = () => {
    console.warn("ga lam");
  };

  const onLike = async () => {
    try {
      const response = await fetch(
        'https://backendappsocial.onrender.com/api/user/:id',
      );
      const json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  const removeLike = () => {
    Alert.Alert("ha");
  };
  
  return (
    
        <View>
        {postInfo.map((data, index) => {
            const [myLike, setMyLike] = useState(data.isLiked);
            const [visible, setVisible] = useState(false);
        return (
   
        <SafeAreaView key={data.id} style={styles.container}>
          <Avatar
            size={50}
            rounded
            source={{uri : data.postPersonImage}}
            containerStyle={{ backgroundColor: "orange" }}
          />
          <View style={styles.Rightcontainer}>
            <View style={styles.tweetHeaderContainer}>
              <View style={styles.tweetHeaderNames}>
                <Text style={styles.name}>{data.useName}</Text>
                {/* <Text style={styles.name}>{userName}</Text> */}
                
                {/* <Text style={styles.name}>@{name}</Text> */}
                <Text style={styles.createdAt}>
                  {moment(data.time).fromNow()}
                </Text>
                
              </View>
              
              <EvilIcons
                name={"navicon"}
                size={16}
                color={"grey"}
                
                
                onPress={() => {setVisible(!visible)}}
              />
              <Modal
                  animationType="slide"
                  transparent={true}
                  visible={visible}
                  onRequestClose={() => {
                    
                    setVisible(!visible);
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 22,
                    }}
                  >
                    <View
                      style={{
                        margin: 20,
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 35,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                      }}
                    >
                      <Text
                        style={{
                          marginBottom: 15,
                          textAlign: "center",
                        }}
                      >
                        Are you sure you want to delete post?
                      </Text>
                      <View style={{ flexDirection: "row" ,justifyContent:'center',alignItems:'center'}}>
                        <Pressable
                          style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: "#2196F3",
                            flex: 1,
                            height:40,
                            margin:10
                          }}
                          onPress={() => setVisible(!visible)}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            Cancel
                          </Text>
                        </Pressable>
                        <Pressable
                          style={{
                            borderRadius: 20,
                            padding: 10,
                            elevation: 2,
                            backgroundColor: "#2196F3",
                            flex: 1,
                            height:40,
                            margin:10
                          }}
                          onPress={() =>   setVisible(!visible)
                           }
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            Yes
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>
            </View>
            <Text style={styles.createdAt}>
                  @{data.email}
                </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Comment')}>
              <Text style={styles.content}>
                {
                 data.postTitle
                }
              </Text>
              {!!"https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-8/s960x960/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=svjjE7DUkc0AX9yjcdC&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=1df4116c73c45a32ebad070704ca3333&oe=5F6ECD77" && (
                <Image
                  style={styles.image}
                  source={{uri :
                   data.postImage
                  }}
                />
              )}
            </TouchableOpacity>
            {/* <Footer tweet={tweet} /> */}
            <View style={styles.Footercontainer}>
              <View style={styles.FootericonContainer}>
              <TouchableOpacity onPress={() => setMyLike(!myLike)}>
              <AntDesign
                    name={myLike ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: myLike ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.Footernumber}>{myLike ? data.likes +1 :data.likes }</Text>
              </View>
              <TouchableOpacity style={styles.FootericonContainer} onPress={()=> navigation.navigate('Comment')}>
                <Feather name={"message-circle"} size={20} color={"grey"} />
                <Text style={styles.Footernumber}>{data.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.FootericonContainer}>
                <EvilIcons name={"share-apple"} size={28} color={"grey"} />
                <Text style={styles.Footernumber}>{}</Text>
              </TouchableOpacity>
              <View style={styles.FootericonContainer}>
                <EvilIcons name={"eye"} size={28} color={"grey"} onPress={onLike}/>
                <Text style={styles.Footernumber}>{}</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
        );
      })}
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
    marginTop: 10,
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
export default PostAdmin;