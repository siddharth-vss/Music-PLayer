import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../styles'

const Page = () => {
    return (
        <View style={defaultStyles.container}>
            <Text style={[defaultStyles.text, { fontWeight: 900 }]}>Artists</Text>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({})
