import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";

const Profile = ({ name, id, prof, website, bio }) => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const [visible, setVisible] = useState(false);
  const logoutHandler = () => {
    navigation.navigate("LogIn");
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleBar}>
          <TouchableOpacity
            style={{ justifyContent: "center" }}
            onPress={() => refRBSheet.current.open()}
          >
            <Ionicons
              name="settings-outline"
              size={30}
              color={"black"}
            ></Ionicons>
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheet}
            height={250}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              container: {
                backgroundColor: "#F6F1F1",
              },
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                margin: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#ffffff",
                  flexDirection: "row",
                  marginBottom: 5,
                  height: 50,
                  alignItems: "center",
                  borderRadius: 10,
                }}
              >
                <Ionicons
                  name="bookmark"
                  style={{ flex: 1, fontSize: 35, marginLeft: 10 }}
                />
                <Text style={{ flex: 5, fontSize: 15 }}>Saved</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#ffffff",
                  flexDirection: "row",
                  marginBottom: 5,
                  height: 50,
                  alignItems: "center",
                  borderRadius: 10,
                }}
                onPress={() => navigation.navigate("ChangePassword")}
              >
                <Ionicons
                  name="lock-closed"
                  style={{ flex: 1, fontSize: 35, marginLeft: 10 }}
                />
                <Text style={{ flex: 5, fontSize: 15 }}>Change PassWord</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: "#ffffff",
                  flexDirection: "row",
                  marginBottom: 5,
                  height: 55,
                  alignItems: "center",
                  borderRadius: 10,
                }}
                onPress={() => {
                  setVisible(true);
                }}
              >
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
                        Ban chac chan dang xuat chu
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
                            Huy bo
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
                          onPress={() => logoutHandler() &&
                          setVisible(!visible)}
                        >
                          <Text
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            Dang Xuat
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>
                <MaterialIcons
                  name="report"
                  style={{ flex: 1, fontSize: 35, marginLeft: 10 }}
                />
                <Text style={{ flex: 5, fontSize: 15 }}>Log out</Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
        </View>

        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={{
                uri: "https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376",
              }}
              style={styles.image}
              resizeMode="center"
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
            style={styles.add}
          >
            <Ionicons
              name="create-outline"
              size={35}
              color={"white"}
            ></Ionicons>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 35 }]}>
            MrRiche
          </Text>
          <Text style={[styles.text, { color: "grey", fontSize: 14 }]}>
            @MrRichee_
          </Text>
        </View>
        <View style={styles.bioContainer}>
          <Ionicons style={styles.bioIcon} name="mail-outline" size={20} />
          <Text style={{ color: "black", fontSize: 14, fontWeight: 600 }}>
            abc@gmail.com
          </Text>
        </View>
        <View style={styles.bioContainer}>
          <Ionicons style={styles.bioIcon} name="clipboard-outline" size={20} />
          <Text style={{ color: "black", fontSize: 14 }}>
            Lorem Ipsum is simply dummy text simply dummy text.
          </Text>
        </View>

        <View style={styles.startsContainer}>
          <View style={styles.startsBox}>
            <Text style={[styles.text, { fontSize: 20 }]}>483</Text>
            <Text style={[styles.text, styles.subtext]}>Post</Text>
          </View>

          <View
            style={[
              styles.startsBox,
              {
                borderColor: "#dfd8c8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[styles.text, { fontSize: 20 }]}>302</Text>
            <Text style={[styles.text, styles.subtext]}>Followers</Text>
          </View>

          <View style={styles.startsBox}>
            <Text style={[styles.text, { fontSize: 20 }]}>302</Text>
            <Text style={[styles.text, styles.subtext]}>Following</Text>
          </View>
        </View>

        <View style={{ marginTop: 32 }}>
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
            <View style={styles.mediaImage}>
              <Image
                source={{
                  uri: "https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376",
                }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImage}>
              <Image
                source={{
                  uri: "https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376",
                }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mediaImage}>
              <Image
                source={{
                  uri: "https://image.cnbcfm.com/api/v1/image/107083077-1656593419933-gettyimages-1395062617-t_w16437_4934a878-972d-4bea-b6ef-b61f4ceeb787.jpeg?v=1682101376",
                }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </ScrollView>
          <View style={styles.mediaCount}>
            <Text
              style={[
                styles.text,
                { fontSize: 24, color: "#dfd8c8", fontWeight: 300 },
              ]}
            >
              3
            </Text>
            <Text
              style={[
                styles.text,
                { fontSize: 12, color: "#dfd8c8", textTransform: "uppercase" },
              ]}
            >
              Media
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    // fontFamily: 'HelveticaNeue',
    // color: '#5257d',
  },
  bioContainer: {
    marginTop: 5,
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
    width: "90%",
  },
  bioIcon: {
    color: "#4D9FEC",
    marginRight: 5,
  },
  // bioText:{
  //   marginTop: 10,
  //   marginLeft:30,
  // },
  subtext: {
    fontSize: 12,
    color: "gray",
    textTransform: "uppercase",
    fontWeight: 500,
  },
  image: {
    flex: 1,
    width: 300,
    height: 300,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    backgroundColor: "#41444b",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },

  startsBox: {
    alignItems: "center",
    flex: 1,
  },

  startsContainer: {
    flexDirection: "row",
    marginTop: 32,
    alignSelf: "center",
  },
  mediaImage: {
    width: 180,
    height: 200,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444b",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.38)",
    shadowRadius: 20,
    shadowOpacity: 1,
  },
});
