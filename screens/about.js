import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

function About() {
  return (
	<View style={globalStyles.containter}>
		<Text style={globalStyles.titleText}> About screen</Text>
	</View>
  )
}

export default About
