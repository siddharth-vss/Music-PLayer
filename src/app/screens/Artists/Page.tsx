import { ScrollView, StyleSheet, FlatList, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { defaultStyles, utilsStyles } from '../../styles'
import { useNavigationSearch } from '../../hooks/useNavigationSearch'
import { useArtists } from '../../store/library'
import { artistNameFilter } from '../../helpers/filter'
import { colors, screenPadding } from '../../constants/tokens'
import { ItemDivider } from '../../components/TracksList'
import FastImage from 'react-native-fast-image'
import { unknownArtistImageUri } from '../../constants/images'
import {  NavigationProp, useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'


const Page = ({navigation }: {navigation : NavigationProp<any>}) => {

    // const navigation = useNavigation();
    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Find in songs',
        },
    })
    const artist = useArtists()

    const filteredArtists = useMemo(() => {
        if (!search) return artist

        return artist.filter(artistNameFilter(search))
    }, [search, artist])

    return (
        <View style={defaultStyles.container}>
            {/* <Text style={[defaultStyles.text, styles.header, { fontWeight: 900 }]}>Artists</Text> */}
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ paddingHorizontal: screenPadding.horizontal, height: '30%', marginTop: '15%' }}
            >
                <FlatList
                    data={[...filteredArtists,{name:'',tracks:[]}]}
                    scrollEnabled={false}
                    ItemSeparatorComponent={ItemDivider}
                    ListFooterComponent={ItemDivider}
                    ListEmptyComponent={
                        <View>
                            <Text style={utilsStyles.emptyContentText}>No artist found</Text>
                            <FastImage
                                source={{ uri: unknownArtistImageUri, priority: FastImage.priority.normal }}
                                style={utilsStyles.emptyContentImage}
                            />
                        </View>
                    }
                    renderItem={({ item: artist }) => {
                        return <TouchableOpacity onPress={()=>{
                            // navigation.navigate("Playlists_Main");
                            navigation.navigate('Art',{
                                name:artist?.name,
                            });

                        }} >
                            {/* <TouchableHighlight> */}
                                <View style={styles.artistItemContainer}>
                                    <View>
                                        <FastImage
                                            source={{
                                                uri: unknownArtistImageUri,
                                                priority: FastImage.priority.high,
                                            }}
                                            style={styles.artistImage}
                                        />
                                    </View>
                                    <View style={{ width: '100%' }} >
                                        <Text numberOfLines={1} style={styles.artistNameText}>{artist.name}</Text>
                                    </View>
                                </View>
                            {/* </TouchableHighlight> */}
                        </TouchableOpacity>

                    }}
                />
            </ScrollView >
        </View >
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
    artistItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
    },
    artistImage: {
        borderRadius: 32,
        width: 40,
        height: 40,
    },
    artistNameText: {
        ...defaultStyles.text,
        fontSize: 17,
        maxWidth: '80%',
    },
})
// <View>
//     {/* Render your item here */}
//     <Text style={{ color: colors.text }}>{artist.name} </Text>
// </View>