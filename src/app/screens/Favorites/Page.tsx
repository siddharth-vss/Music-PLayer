import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { defaultStyles } from '../../styles'
import { TracksList } from '../../components/TracksList'
import library from '../../../assets/data/library.json'
import { screenPadding } from '../../constants/tokens'
import { useFavorites } from '../../store/library'
import { trackTitleFilter } from '../../helpers/filter'
import { useNavigationSearch } from '../../hooks/useNavigationSearch'

const Page = () => {
  const Favtracs = useMemo(() => {
    return library.filter((track) => track.rating === 1)
  }, [])
  const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})

  const  favoritesTracks = useFavorites().favorites
  const filteredFavoritesTracks = useMemo(() => {
		if (!search) return favoritesTracks

		return favoritesTracks.filter(trackTitleFilter(search))
	}, [search, favoritesTracks])
  return (
    <View style={defaultStyles.container}>
      {/* <Text style={[defaultStyles.text, styles.header, { fontWeight: 900 }]}>Favorites</Text> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: screenPadding.horizontal, height: '60%', marginTop: '15%' }}>
        <TracksList scrollEnabled={false} tracks={filteredFavoritesTracks} id={''} />
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