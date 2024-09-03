import { MovingText } from '../components/MovingText'
import { PlayerControls } from '../components/PlayerControls'
import { PlayerProgressBar } from '../components/PlayerProgressbar'
import { PlayerRepeatToggle } from '../components/PlayerRepeatToggle'
import { PlayerVolumeBar } from '../components/PlayerVolumeBar'
// import { unknownTrackImageUri } from '../constants/images'
import { colors, fontSize, screenPadding } from '../constants/tokens'
// import { usePlayerBackground } from '../hooks/usePlayerBackground'
import { useTrackPlayerFavorite } from '../hooks/useTrackPlayerFavorite'
import { defaultStyles, utilsStyles } from '../styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useActiveTrack } from 'react-native-track-player'
import LinearGradient from 'react-native-linear-gradient';
import { useEffect, useState } from 'react'
import { getColors, ImageColorsResult } from 'react-native-image-colors'
import { AndroidImageColors } from 'react-native-image-colors/build/types'




const PlayerScreen = () => {
  const activeTrack = useActiveTrack()
  const [ImageColors, setImageColors] = useState(null)

  useEffect(() => {
  //   const url = 'https://i.imgur.com/68jyjZT.jpg'

  //   getColors(url, {
  //     fallback: colors.background,
  //     cache: true,
  //     key: url,
  //   }).then((colors: ImageColorsResult | any) => setImageColors(colors ))
  }, [])
  

  const { top, bottom } = useSafeAreaInsets()

  const { isFavorite, toggleFavorite } = useTrackPlayerFavorite()

  if (!activeTrack) {
    return (
      <View style={[defaultStyles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator color={colors.icon} />
      </View>
    )
  }

  return (

    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[colors.background, "#FFFFFF"]}
    // colors={ImageColors ? [ImageColors?.background, ImageColors?.primary] : [colors.background]}
    >
      <View style={[styles.overlayContainer]}>
        <DismissPlayerSymbol />
        <View style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}>

          <View style={styles.artworkImageContainer}>
            <FastImage
              source={{
                uri: activeTrack.artwork ?? 'https://res.cloudinary.com/dabh5hsuk/image/upload/v1725367459/unknown_track_lrnfi8.png',
                priority: FastImage.priority.high,
              }}
              resizeMode="cover"
              style={styles.artworkImage}
            />
          </View>

          <View style={{ flex: 1 }}>

            <View style={{ marginTop: 'auto' }}>
              <View style={{ height: 60 }}>
                <View

                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {/* Track title */}
                  <View style={styles.trackTitleContainer}>
                    <MovingText
                      text={activeTrack.title ?? ''}
                      animationThreshold={30}
                      style={styles.trackTitleText}
                    />
                  </View>

                  {/* Favorite button icon */}
                  <FontAwesome
                    name={isFavorite ? 'heart' : 'heart-o'}
                    size={20}
                    color={isFavorite ? colors.primary : colors.icon}
                    style={{ marginHorizontal: 14 }}
                    onPress={toggleFavorite}
                  />
                </View>

                {/* Track artist */}
                {activeTrack.artist && (
                  <Text numberOfLines={1} style={[styles.trackArtistText, { marginTop: 6 }]}>
                    {activeTrack.artist}
                  </Text>
                )}
              </View>


              <PlayerProgressBar style={{ marginTop: 32 }} />
              <PlayerControls style={{ marginTop: 40 }} />
            </View>

            <PlayerVolumeBar style={{ marginTop: 'auto', marginBottom: 30 }} />

            <View style={utilsStyles.centeredRow}>
              <PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
            </View>
          </View>
        </View>

      </View>
    </LinearGradient >
  )
}

const DismissPlayerSymbol = () => {
  const { top } = useSafeAreaInsets()

  return (
    <View
      style={{
        position: 'absolute',
        top: top + 8,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <View
        accessible={false}
        style={{
          width: 50,
          height: 8,
          borderRadius: 8,
          backgroundColor: '#fff',
          opacity: 0.7,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  overlayContainer: {
    ...defaultStyles.container,
    paddingHorizontal: screenPadding.horizontal,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  artworkImageContainer: {
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 11.0,
    flexDirection: 'row',
    justifyContent: 'center',
    height: '45%',
  },
  artworkImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 22,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: 22,
    fontWeight: '700',
  },
  trackArtistText: {
    ...defaultStyles.text,
    fontSize: fontSize.base,
    opacity: 0.8,
    maxWidth: '90%',
  },
})

export default PlayerScreen
