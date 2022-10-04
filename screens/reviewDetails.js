import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

function ReviewDetails({navigation}) {
  return (
	<View style={globalStyles.containter}>
		<Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
		<Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
		<Text style={globalStyles.titleText}>{navigation.getParam('rating')}</Text>
	</View>
  )
}

export default ReviewDetails
