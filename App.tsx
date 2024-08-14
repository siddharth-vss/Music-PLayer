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
import { Artists, Favorites, Playlists, Songs } from './src/app/screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, fontSize } from './src/app/constants/tokens';

const Tab = createBottomTabNavigator();



function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          
          tabBarActiveTintColor: colors.primary,
          tabBarLabelStyle: {
            fontSize: fontSize.xs,
            fontWeight: '600',
          },
          tabBarStyle: {
            position: 'absolute',
            backgroundColor : '#0f0f0f',
            height :60,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 0.2,
            // borderColor : "#FFF",
            paddingTop: 8,
          },

        }}


        initialRouteName="Songs"
      >
        <Tab.Screen name="Favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (<FontAwesome name="heart" size={20} color={color} />),
        }} component={Favorites} />
        <Tab.Screen name="Playlists"
          options={{
            title: "Playlists",
            tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="playlist-play" size={28} color={color} />),
          }}
          component={Playlists} />
        <Tab.Screen name="Songs"
          options={{
            title: "Songs",
            tabBarIcon: ({ color }) => (<Ionicons name="musical-notes-sharp" size={24} color={color} />),
          }}
          component={Songs} />
        <Tab.Screen name="Artists"
          options={{
            title: "Artists",
            tabBarIcon: ({ color }) => (<FontAwesome6 name="users-line" size={24} color={color} />),
          }}
          component={Artists} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function Home() {
  // screenOptions={{



  //   tabBarBackground : ()=>(
  //     <BlurView
  //       intensity={95}
  //       style={{
  //         ...StyleSheet.absoluteFillObject,
  //         overflow: 'hidden',
  //         backgroundColor : '#00000099',
  //         borderTopLeftRadius: 20,
  //         borderTopRightRadius: 20,
  //       }}
  //     />
  //   ),
  // }}
  return (
    <>
      <View>
        <Text>Home Screen</Text>
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
