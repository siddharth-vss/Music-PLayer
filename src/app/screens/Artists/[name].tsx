import { Text } from 'react-native'
import { ArtistTracksList } from '../../components/ArtistTracksList'
import { screenPadding } from '../../constants/tokens'
import { useArtists } from '../../store/library'
import { defaultStyles } from '../../styles'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const ArtistDetailScreen = ({ route }: { route: any }) => {


	const artists = useArtists()

	const artist = artists.find((artist) => artist.name === route.params.name)

	if (!artist) {
		console.warn(`Artist ${route.params.name} not found!`)

		// return <Redirect href={'/(tabs)/artists'} />
	}
	
	console.log(artist?.tracks.length);

	return (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal, marginTop: '20%' }}
			>

				<ArtistTracksList artist={artist!} />
			</ScrollView>
		</View>
	)
}

export default ArtistDetailScreen