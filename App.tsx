/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import {Home, Start,Details} from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Artists,Favorites,Playlists,Songs} from './src/app/screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();



function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        {/* <Tab.Screen name="favorites" options={{
        title : "Favorites",
        tabBarIcon :({color})=><FontAwesome name="heart" size={20} color={color} />
      }} />
      <Tab.Screen name="playlists" options={{
        title : "Playlists",
        tabBarIcon :({color})=><MaterialCommunityIcons name="playlist-play" size={28} color={color} />
      }}/>
      <Tab.Screen name="songs" options={{
        title : "Songs",
        tabBarIcon :({color})=><Ionicons name="musical-notes-sharp" size={24} color={color} />
      }}/>
      <Tab.Screen name="artists" options={{
        title : "Artists",
        tabBarIcon :({color})=><FontAwesome6 name="users-line" size={24} color={color} />
      }}/> */}
        <Tab.Screen name="Favorites" options={{
          title : "Favorites",
          tabBarIcon :({color})=><Ionicons name="heart-sharp" size={20} color={color} />
        }} component={Favorites} />
        <Tab.Screen name="Playlists"
        options={{
          title : "Playlists",
          tabBarIcon :({color})=><MaterialCommunityIcons name="playlist-play" size={28} color={color} />
        }}
         component={Playlists} />
        <Tab.Screen name="Songs"
        options={{
          title : "Songs",
          tabBarIcon :({color})=><Ionicons name="musical-notes-sharp" size={24} color={color} />
        }}
         component={Songs} />
        <Tab.Screen name="Artists" 
        options={{
          title : "Artists",
          tabBarIcon :({color})=><FontAwesome6 name="users-line" size={24} color={color} />
        }}
         component={Artists} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function Home() {
  return (
    <>
      <View>
        <Text>Home Screen</Text>
      </View>
    </>
  )
}
function Start() {
  return (
    <>
      <View>
        <Text>Start Screen</Text>
      </View>
    </>
  )
}
function Details() {
  return (
    <>
      <View>
        <Text>Details Screen</Text>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
