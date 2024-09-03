import { PlayPauseButton, SkipToNextButton } from '../components/PlayerControls'
// import { unknownTrackImageUri } from '../constants/images'
import { useLastActiveTrack } from '../hooks/useLastActiveTrack'
import { defaultStyles } from '../styles'
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useActiveTrack } from 'react-native-track-player'
import { MovingText } from './MovingText'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ReduceMotion } from 'react-native-reanimated'

export const FloatingPlayer = ({ style }: ViewProps) => {
	const navigation = useNavigation<NavigationProp<any>>()

	const activeTrack = useActiveTrack()
	const lastActiveTrack = useLastActiveTrack()

	const displayedTrack = activeTrack ?? lastActiveTrack
	
	const handlePress = () => {
		navigation.navigate('Player');
		// router.push({ pathname: '(modals)/addToPlaylist', params: { trackUrl: track.url } });
		console.log('hiii');
	}

	if (!displayedTrack) return null

	return (
		<TouchableOpacity onPress={handlePress} activeOpacity={0.9} style={[styles.container, style]}>
			<>
				<FastImage
					source={{
						uri: displayedTrack.artwork ?? 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1725367459/unknown_track_lrnfi8.png',
					}}
					style={styles.trackArtworkImage}
				/>

				<View style={styles.trackTitleContainer}>
					<MovingText
						style={styles.trackTitle}
						text={displayedTrack.title ?? ''}
						animationThreshold={25}
					/>
				</View>

				<View style={styles.trackControlsContainer}>
					<PlayPauseButton iconSize={24} />
					<SkipToNextButton iconSize={22} />
				</View>
			</>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#252525',
		padding: 8,
		borderRadius: 12,
		paddingVertical: 10,
	},
	trackArtworkImage: {
		width: 40,
		height: 40,
		borderRadius: 8,
	},
	trackTitleContainer: {
		flex: 1,
		overflow: 'hidden',
		marginLeft: 10,
	},
	trackTitle: {
		...defaultStyles.text,
		fontSize: 18,
		fontWeight: '600',
		paddingLeft: 10,
	},
	trackControlsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 20,
		marginRight: 16,
		paddingLeft: 16,
	},
})
