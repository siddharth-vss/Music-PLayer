import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './Page';
import { StackScreenWithSearchBar } from '../../constants/layout';
import { colors } from '../../constants/tokens';
import ArtistDetailScreen from './[name]';
// import { Artists } from '..';
const Stack = createNativeStackNavigator();

const Artists = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Artists'
        options={{
          ...StackScreenWithSearchBar,
          headerShown: true
        }}
        component={Page} />
      <Stack.Screen
        name="Art"
        options={{
          headerTitle: '',
          headerBackVisible: true,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.primary,
        }}
        component ={ArtistDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default Artists

const styles = StyleSheet.create({})