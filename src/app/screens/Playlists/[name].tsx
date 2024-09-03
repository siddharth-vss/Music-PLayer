
import { useMemo } from 'react'
import { PlaylistsList } from '../../components/PlaylistsList'
import { screenPadding } from '../../constants/tokens'
import { useNavigationSearch } from '../../hooks/useNavigationSearch'
import {  usePlaylists } from '../../store/library'
import { defaultStyles } from '../../styles'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { playlistNameFilter } from '../../helpers/filter'
import { Playlist } from '../../helpers/types'
import { PlaylistTracksList } from '../../components/PlaylistTracksList'
import { Text } from 'react-native'

const PlayListsDetailScreen = ({ route }: { route: any }) => {

	const search = useNavigationSearch({
		searchBarOptions: {
		  placeholder: 'Find in songs',
		},
	  })
	
	
	  const { playlists } = usePlaylists();

	//   console.log(route)
	  const playlistName = route.params.name;
	
	  const playlist = playlists.find((playlist) => playlist.name === playlistName)
	
	
	  const handelPlaylistPress = (Playlists: Playlist) => {
		
	  }

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal, marginTop: '20%' }}
			>
				<Text style={[defaultStyles.text, { fontWeight: 900 }]}>Playlist Details</Text>
        <PlaylistTracksList playlist={playlist!} />
			</ScrollView>
		</View>
	)
}

export default PlayListsDetailScreen