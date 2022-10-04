import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

function Home() {
  return (
	<View style={globalStyles.containter}>
		<Text style={globalStyles.titleText}>Home screen</Text>
	</View>
  )
}

export default Home
