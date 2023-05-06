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
              source={{uri:"https://lh3.googleusercontent.com/ogw/AOh-ky2cWsAILwBTX3_R494N5SH1ZlXSfUd5xOx93gTJNg=s32-c-mo"}}
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
