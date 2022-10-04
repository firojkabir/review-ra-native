import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Home from './screens/home';

SplashScreen.preventAutoHideAsync();

function App() {
	const [fontsLoaded] = useFonts({
		'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
		'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
	})

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if(!fontsLoaded) {
		return null;
	} 
	
	return (
		<Home />
	);
}

export default App
