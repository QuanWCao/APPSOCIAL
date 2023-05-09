import { View, Text, TextInput, Image, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import TrendingCard from '../components/TrendingCard'
import SearchProfCard from '../components/SearchProfCard'
import { TrendingData, Data } from '../components/data/data'

const ScreenWidth = Dimensions.get('window').width


const Search = ({navigation}) => {
  const [user, setUser] = useState([])
  const data = Data
  
  const searchUser = (e) => {
    if(e){
      setUser(data.filter(dat => dat.id.includes(e))),
      console.log(user)
    }else{
      setUser([])
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
              style={styles.accIcon}
              source={{uri:"https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/280727990_1379564759214526_3554061026221242893_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfynfrejHHJNPpkIQ49N1sISRcgeGi-NMhJFyB4aL40_kp2nPl2fOw8munXp_Oeg2QI_ybyaeyBjH_lgXrYRBW&_nc_ohc=CSmkVXjnbcYAX8PUdAl&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAP_5cm7wUknuOe2xfS1ursOHZw0rmNZj-9sigsBp2UzQ&oe=645E7A20"}}
          />

        </TouchableOpacity>
        
        <TextInput style={styles.inputText}
            placeholder='Search' 
            placeholderTextColor={"#807c7c"}
            onChangeText={searchUser}
        />
        
      </View>
      <View style={styles.container}>
      <ScrollView style={{borderTopWidth: 1, borderColor: '#E1E8ED', marginTop: 10}} >
      {user?.map(dat =>
        <SearchProfCard 
        key ={dat.id} prof={dat.prof} id={dat.id} name={dat.name} 
        verified={dat.verified} 
        />
        )}
      {TrendingData.map(dat => 
        
          <TrendingCard key={dat.id} topic={dat.topic} hashtag={dat.hashtag} count={dat.count} />
        )}
      </ScrollView>
    </View>
    </View>
  )
}

export default Search
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  header:{
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  inputText:{
    flex:2,
    borderWidth: 1,
    borderRadius: 50,
    width:ScreenWidth-150,
    height: 40,
    paddingLeft: 15,
    borderColor: '#807c7f',
    textAlignVertical:"center",
    marginRight: 10,
    backgroundColor:'#d5dde4'

  },
  accIcon:{
    height:40,
    width:40,
    borderRadius:50,
    marginLeft:10,
    marginRight: 5
  }

})
