import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './Page';
import { StackScreenWithSearchBar } from '../../constants/layout';
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
    </Stack.Navigator>
  )
}

export default Playlists

const styles = StyleSheet.create({})