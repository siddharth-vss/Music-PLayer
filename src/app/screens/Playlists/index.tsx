import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './Page';
import { StackScreenWithSearchBar } from '../../constants/layout';
import { colors } from '../../constants/tokens';
import PlayListsDetailScreen from './[name]';
// import { Artists } from '..';
const Stack = createNativeStackNavigator();

const Playlists = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Playlists'
        options={{
          ...StackScreenWithSearchBar,
          headerShown: true
        }} component={Page} />
        <Stack.Screen
        name="Playlist"
        options={{
          headerTitle: '',
          headerBackVisible: true,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.primary,
        }}
        component ={PlayListsDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default Playlists

const styles = StyleSheet.create({})