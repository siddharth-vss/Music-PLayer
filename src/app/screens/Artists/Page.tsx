import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../styles'
import { useNavigationSearch } from '../../hooks/useNavigationSearch'

const Page = () => {
    const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})
    return (
        <View style={defaultStyles.container}>
            {/* <Text style={[defaultStyles.text, styles.header, { fontWeight: 900 }]}>Artists</Text> */}
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        top: 40,
        left: 46,
        fontSize: 32,
        fontWeight: 'bold'
    },
})
