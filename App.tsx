/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Artists, Favorites, Playlists, Songs } from './src/app/screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, fontSize } from './src/app/constants/tokens';
import Player from './src/app/screens/Player';
import { FloatingPlayer } from './src/app/components/FloatingPlayer';
import TrackPlayer from 'react-native-track-player';
import DATA from './src/assets/data/library.json';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



function App(): React.JSX.Element {
  useEffect(() => {
    async function setup() {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add(DATA);
    }
    setup();
  }, [])


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Main' component={Component} options={{ headerShown: false }} />
          <Stack.Screen name='Player' component={Player} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
const Component = () => (<>
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
        backgroundColor: '#0f0f0f',
        height: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 0.2,
        // borderColor : "#FFF",
        paddingTop: 8,
      },

    }}


    initialRouteName="Songs_Main"
  >
    <Tab.Screen name="Favorites_Main"
      options={{
        title: "Favorites",
        tabBarIcon: ({ color }) => (<FontAwesome name="heart" size={20} color={color} />),
      }} component={Favorites} />
    <Tab.Screen name="Playlists_Main"
      options={{
        title: "Playlists",
        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="playlist-play" size={28} color={color} />),
      }}
      component={Playlists} />
    <Tab.Screen name="Songs_Main"
      options={{
        title: "Songs",
        tabBarIcon: ({ color }) => (<Ionicons name="musical-notes-sharp" size={24} color={color} />),
      }}
      component={Songs} />
    <Tab.Screen name="Artists_Main"
      options={{
        title: "Artists",
        tabBarIcon: ({ color }) => (<FontAwesome6 name="users-line" size={24} color={color} />),
      }}
      component={Artists} />
  </Tab.Navigator>
  <FloatingPlayer
    style={{
      position: 'absolute',
      left: 8,
      right: 8,
      bottom: 78,
    }}
  />
</>
)


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
