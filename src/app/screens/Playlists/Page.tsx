import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { defaultStyles } from '../../styles'
import { useNavigationSearch } from '../../hooks/useNavigationSearch'
import { screenPadding } from '../../constants/tokens'
import { PlaylistsList } from '../../components/PlaylistsList'
import { usePlaylists } from '../../store/library'
import { playlistNameFilter } from '../../helpers/filter'
import { Playlist } from '../../helpers/types'
import { NavigationProp } from '@react-navigation/native'


const Page = ({navigation}: {navigation : NavigationProp<any>}) => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs',
    },
  })


  const { playlists } = usePlaylists();

  const filteredPlaylists = useMemo(() => {
    if (!search) return playlists

    return playlists.filter(playlistNameFilter(search))
  }, [search, playlists])


  const handelPlaylistPress = (Playlists: Playlist) => {

    // console.log();
    navigation.navigate('Playlist', {
      name: Playlists.name,
    });
  }

  return (
    <View style={defaultStyles.container}>
      {/* <Text style={[defaultStyles.text, styles.header, { fontWeight: 900 }]}>Playlists</Text> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal, height: '30%', marginTop: '15%' }}>

        <PlaylistsList scrollEnabled={false} playlists={filteredPlaylists} onPlaylistPress={handelPlaylistPress} />

      </ScrollView>
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