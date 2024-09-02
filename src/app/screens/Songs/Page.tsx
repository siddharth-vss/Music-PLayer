import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { defaultStyles } from '../../styles'
import { screenPadding } from '../../constants/tokens'
import { TracksList } from '../../components/TracksList'
import { generateTracksListId } from '../../helpers/miscellaneous'
import { useNavigationSearch } from '../../hooks/useNavigationSearch'
import { useTracks } from '../../store/library'
import DATA1 from '../../../assets/data/library.json'
import { trackTitleFilter } from '../../helpers/filter'

type ItemProps = {
	url : string ;
    title : string ;
    artist ?: string | undefined ;
    artwork ?: string |undefined ;
    rating ?: number |undefined ;
    playlist ?: string[] | undefined;
};

const Item = (data: ItemProps |any) => {
	console.log(data);
	return(<View style={styles.item}>
	  <Text style={styles.title} >{data.data.title}</Text>
	</View>)
};

const Page = () => {
	const search = useNavigationSearch({
		searchBarOptions: {
			placeholder: 'Find in songs',
		},
	})
	

	const tracks = useTracks()

	const filteredTracks = useMemo(() => {
		if (!search) return tracks

		return tracks.filter(trackTitleFilter(search))
	}, [search, tracks])
	return (
		<View style={defaultStyles.container}>
			{/* <Text style={[defaultStyles.text , styles.header, { fontWeight: 900 }]}>Songs</Text> */}
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal, height: '60%', marginTop: '15%' }}
			>
				{/* <FlatList
					data={DATA1}
					renderItem={({ item ,index }) => <Item data={item} />}
					keyExtractor={item => item.title}
				/> */}
				<TracksList
					id={generateTracksListId('songs', search)}
					tracks={filteredTracks}
					scrollEnabled={false}
				/>
			</ScrollView>
		</View>
	)
}

export default Page

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  marginTop: StatusBar.currentHeight || 0,
	},
	item: {
	  backgroundColor: '#9155fd',
	  padding: 20,
	  marginVertical: 8,
	  marginHorizontal: 16,
	},
	title: {
	  fontSize: 32,
	  color : '#FFFFFF'
	},
	header:{
		position : 'relative',
		top : 40,
        left : 46,
        fontSize : 32,
        fontWeight : 'bold'
	},
  });