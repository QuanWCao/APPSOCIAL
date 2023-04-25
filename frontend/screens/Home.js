import { View, Text } from 'react-native'
import React from 'react'
import Search from './Search'
import Notification from './Notification'
import News from './News'
import Profile from './Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
const Tab =createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen
        name="Home"
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tìm kiếm"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
      
        name="Thông báo"
        component={Notification}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications"  size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
    </Tab.Navigator>
  )
}

export default Home