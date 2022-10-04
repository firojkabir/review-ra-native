import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Home() {
  return (
	<View style={styles.containter}>
		<Text style={styles.titleText}>Home screen</Text>
	</View>
  )
}

const styles = StyleSheet.create({
	containter: {
		padding: 24,
	},
	titleText: {
		fontFamily: 'nunito-bold',
		fontSize: 24,
	}
})

export default Home