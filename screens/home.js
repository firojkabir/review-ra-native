import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/global';

function Home({navigation}) {
	const [reviews, setReviews] = useState([
		{title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
		{title: 'Gotta Catch them All', rating: 4.3, body: 'lorem ipsum', key: '2'},
		{title: 'Not So Final Fantasy', rating: 4.8, body: 'lorem ipsum', key: '3'},
	])

  return (
	<View style={globalStyles.containter}>
		<FlatList
			data={reviews}
			renderItem={({item}) => (
				<TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
					<Text style={globalStyles.titleText}>
						{item.title}
					</Text>
				</TouchableOpacity>
			)}

		 />
	</View>
  )
}

export default Home
