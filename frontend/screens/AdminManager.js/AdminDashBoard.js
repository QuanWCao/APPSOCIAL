import React ,{useState}from "react";
import { Text, ScrollView, Modal,View, Alert, Pressable,TouchableOpacity ,StyleSheet } from "react-native";


import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/FontAwesome";


import { useNavigation } from "@react-navigation/native";



const DashBoardAdmin = () => {
  const navigation = useNavigation();
  const[countUser ,setCountUser] = useState(20);
    const[countLike ,setCountLike] = useState(11);
    const[countPost ,setCountPost] = useState(6);
    const[countReportPost ,setCountReportPost] = useState(0);
    const[countComment ,setCountComment] = useState(6);
    const [visible, setVisible] = useState(false);
    const logoutHandler = () => {
      navigation.navigate("LogIn") 
    };
    return (
        <View style={styles.container}>
	      <ScrollView
	        style={{ backgroundColor: "#f2f2f2", margin: 10, borderRadius: 20 }}
	      >
	        <TouchableOpacity
	          style={styles.Touch1}
	          
	        >
	          <View style={{ alignContent: "center" ,flexDirection :"column",margin:10,width:"80%"}}>
	            <Icon1 name="users" color="#245953" size={40} style={{marginLeft :5, marginBottom :10}}/>
	          
	          
	            <Text >Total Users</Text>
	          
              </View>
              <View style={{alignSelf: "center"}}>
              <Text style={{fontSize: 24}} >{countUser}</Text>
              </View>
	        </TouchableOpacity>
	        <TouchableOpacity
	          style={styles.Touch1}
	          
	        >
	          <View style={{ alignContent: "center" ,flexDirection :"column",margin:10,width:"80%"}}>
	            <Icon1 name="comments" color="#27E1C1" size={40} style={{marginLeft :5, marginBottom :10}}/>
	          
	          
	            <Text >Total Comments</Text>
	          
              </View>
              <View style={{alignSelf: "center"}}>
              <Text style={{fontSize: 24}} >{countComment}</Text>
              </View>
	        </TouchableOpacity>
	

	        <TouchableOpacity
	          style={styles.Touch1}
	          
	        >
	          <View style={{ alignContent: "center" ,flexDirection :"column",margin:10,width:"80%"}}>
	            <Icon1 name="newspaper-o" color="#0A4D68" size={40} style={{marginLeft :5, marginBottom :10}}/>
	          
	          
	            <Text >Total Posts</Text>
	          
              </View>
              <View style={{alignSelf: "center"}}>
              <Text style={{fontSize: 24}} >{countPost}</Text>
              </View>
	        </TouchableOpacity>
	

	        <TouchableOpacity
	          style={styles.Touch1}
	          
	        >
	          <View style={{ alignContent: "center" ,flexDirection :"column",margin:10,width:"80%"}}>
	            <Icon1 name="ban" color="red" size={40} style={{marginLeft :5, marginBottom :10}}/>
	          
	          
	            <Text >Total Report Posts</Text>
	          
              </View>
              <View style={{alignSelf: "center"}}>
              <Text style={{fontSize: 24}} >{countReportPost}</Text>
              </View>
	        </TouchableOpacity>
	

	        <TouchableOpacity
	          style={styles.Touch1}
	          
	        >
	          <View style={{ alignContent: "center" ,flexDirection :"column",margin:10,width:"80%"}}>
	            <Icon name="like1" color="#B9EDDD" size={40} style={{marginLeft :5, marginBottom :10}}/>
	          
	          
	            <Text >Total Like</Text>
	          
              </View>
              <View style={{alignSelf: "center"}}>
              <Text style={{fontSize: 24}} >{countLike}</Text>
              </View>
	        </TouchableOpacity>



          <TouchableOpacity
	          style={{ backgroundColor: "#FFFFFF",
      borderRadius: 10,
      marginTop: 50,
      marginBottom: 5,
      marginRight: 10,
      flexDirection: "row",
      marginLeft: 10,
      height:40,
      justifyContent: "center",
      alignItems: "center",
      alignContent :'flex-end'
      }}

      onPress={() => {
                  setVisible(true);
                }}
	          
	        >
	         <Text>Log out</Text>
	        </TouchableOpacity>

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
                        Log out of your account?
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
                          onPress={() => {logoutHandler() ; setVisible(false) 
                          }
                          }>
                          <Text
                            style={{
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            Log out
                          </Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>

	      </ScrollView>
	      
	    </View>

    )
}
export default DashBoardAdmin;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f2f2f2",
    },
    scrollView: {
      marginLeft: "3%",
    },
    
    Touch1: {
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      marginRight: 10,
      flexDirection: "row",
      marginLeft: 10,
    },
    Touch2: {
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      marginTop: 10,
      marginBottom: 5,
      marginRight: 10,
      flexDirection: "row",
    },
    viewText: {
      justifyContent: "center",
      alignItems: "flex-start",
      marginRight: 20,
    },
});