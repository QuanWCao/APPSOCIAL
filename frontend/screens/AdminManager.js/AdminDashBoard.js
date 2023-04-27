import React ,{useState}from "react";
import { Text, ScrollView, View, Alert, TouchableOpacity ,StyleSheet } from "react-native";


import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/FontAwesome";


import { useNavigation } from "@react-navigation/native";



const DashBoardAdmin = () => {
  const[countUser ,setCountUser] = useState();
    const[countLike ,setCountLike] = useState(0);
    const[countPost ,setCountPost] = useState();
    const[countReportPost ,setCountReportPost] = useState();
    const[countComment ,setCountComment] = useState();
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
              <Text style={{fontSize: 24}} >{countLike}</Text>
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
              <Text style={{fontSize: 24}} >{countLike}</Text>
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
              <Text style={{fontSize: 24}} >{countLike}</Text>
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
              <Text style={{fontSize: 24}} >{countLike}</Text>
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