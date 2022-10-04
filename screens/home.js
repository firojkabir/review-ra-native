import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

function Home({navigation}) {
	const pressHandler = () => {
		navigation.navigate('ReviewDetails')
	}

  return (
	<View style={globalStyles.containter}>
		<Text style={globalStyles.titleText}>Home screen</Text>
		<Button title='go to review dets' onPress={pressHandler}/>
	</View>
  )
}

export default Home
