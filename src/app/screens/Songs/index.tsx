import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './Page';
import { StackScreenWithSearchBar } from '../../constants/layout';

const Stack = createNativeStackNavigator();

const Songs = () => {
 
  return (
    <Stack.Navigator>
      <Stack.Screen name='Songs' options={{
        ...StackScreenWithSearchBar,
        headerShown : true
        }} component={Page} />
    </Stack.Navigator>
  )
}

export default Songs

const styles = StyleSheet.create({})