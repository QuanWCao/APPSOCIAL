// import { View, Text, Button, StyleSheet,SafeAreaView,ScrollView,TextInput,TouchableOpacity, Image } from 'react-native'
// import React, { useState} from 'react';
// import { AntDesign } from "@expo/vector-icons";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Animated ,{Easing}from 'react-native-reanimated';
// const HomeAdmin = (props) => {
   
//     const [value] = useState(new Animated.Value(props.value))

//     useEffect(()=>{
//         Animated.timing(value, {
//             toValue: props.value,
//             duration: 100,
//         }).start()
//     }, [props.value])
//     const _diff_clamp_scroll_y = Animated.diffClamp(_scroll_y, 0, 50);
//     const _header_height = Animated. interpolate( _diff_clamp_scroll_y, {
//     inputRange: [0, 50],
//     outputRange: [50, 0],
//     extrapolate: "clamp"
    
//     });
//     const header_translate_y= Animated.interpolate( _diff_clamp_scroll_y, {
//     inputRange: [0, 50],
//     outputRange: [0,-50],
//     extrapolate:"clamp"
//     });

//     const header_opacity= Animated.interpolate( _diff_clamp_scroll_y, {
//         inputRange: [0, 50],
//         outputRange: [1,0],
//         extrapolate:"clamp"
//         });
//   return (
//     <SafeAreaView style={styles.container}>
//     <Animated.View style={[styles.header,
//     {
//             height : _header_height,
//             transform : [{translateY: header_translate_y}],
//             opacity : header_opacity
            
//     }
//     ]}
    
//     showsVerticalScrollIndicator={false}
//     bounces={false}
//     crollEventThrottle={5}
//     onScroll={Animated.event([
// {
//     nativeEvent: {contentOffset: { y: _scroll_y }}
//     }
// ])}
// >
// <Text style={{width:40 , height:30}}> Logo </Text>
// <View style={styles.fake_icon_box}>

// <Icon name = "sreach" size={22}color="#000000"/>
// </View>

    

//     </Animated.View>
// <Animated.ScrollView style={[styles.srcoll_view,
//     {
//             height : _header_height,
//             transform : [{translateY: header_translate_y}],
//             opacity : header_opacity
            
//     }
//     ]}
    
//     showsVerticalScrollIndicator={false}
//     bounces={false}
//     crollEventThrottle={5}
//     onScroll={Animated.event([
// {
//     nativeEvent: {contentOffset: { y: _scroll_y }}
//     }
// ])}>
// <View style={[styles.fake_post, {backgroundColor:'#222222'}]} />
// <View style={[styles.fake_post, {backgroundColor: "#333333"}]} />
// <View style={[styles.fake_post, {backgroundColor:'#222222'}]} />
// <View style={[styles.fake_post, {backgroundColor: "#333333"}]} />
// <View style={[styles.fake_post, {backgroundColor: "#333333"}]} />
// </Animated.ScrollView>

//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
   
//   },
//   header: {
//     flexDirection :"row",
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal :16
//   },
//   fake_icon_box: {
//  backgroundColor : "#e4e6eb",
//  width: 40 ,
//  height:40,
//  borderRadius :40,
//  flexDirection : "row",
//  justifyContent :'center',
//  alignItems :"center"
//   },
//   srcoll_view :{
//     flex :1
//   },
//   fake_post: {
//     height: 250,
//     marginHorizontal:16,
//     marginTop:16,
//     borderRadius:8
//   }

// })
// export default HomeAdmin


