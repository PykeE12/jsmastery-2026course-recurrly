import '@/global.css';
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'sans-regular': require('./assests/fonts/PlusJakartaSans-Regular.ttf'),
    'sans-medium': require('./assests/fonts/PlusJakartaSans-Medium.ttf'),
    'sans-semibold': require('./assests/fonts/PlusJakartaSans-SemiBold.ttf'),
    'sans-bold': require('./assests/fonts/PlusJakartaSans-Bold.ttf'),
    'sans-extrabold': require('./assests/fonts/PlusJakartaSans-ExtraBold.ttf'),
    'sans-light': require('./assests/fonts/PlusJakartaSans-Light.ttf')
  });
  
  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
