import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './Page';
// import { Artists } from '..';
const Stack = createNativeStackNavigator();

const Artists = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Artists' options={{headerShown : false}} component={Page} />
    </Stack.Navigator>
  )
}

export default Artists

const styles = StyleSheet.create({})