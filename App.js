import { StatusBar } from 'expo-status-bar';  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';
import {
Montserrat_100Thin,
Montserrat_200ExtraLight,
Montserrat_300Light,
Montserrat_400Regular,
Montserrat_500Medium,
Montserrat_600SemiBold,
Montserrat_700Bold,
Montserrat_800ExtraBold,
Montserrat_900Black,
Montserrat_100Thin_Italic,
Montserrat_200ExtraLight_Italic,
Montserrat_300Light_Italic,
Montserrat_400Regular_Italic,
Montserrat_500Medium_Italic,
Montserrat_600SemiBold_Italic,
Montserrat_700Bold_Italic,
Montserrat_800ExtraBold_Italic,
Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat'
import BottomNav from './src/components/BottomNav/BottomNav';
import Context from './Context';
 

const Stack = createNativeStackNavigator();

function MyStack() {


  return (
		 
		<Stack.Navigator screenOptions={{headerShown:false}} >
		 
			<Stack.Screen name="BottomNav" component={BottomNav} />
		</Stack.Navigator>
  );
}

export default function App() {
	
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
		Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
	else {
   return (
		 <Context>
 	    <NavigationContainer>
			<MyStack/>
			</NavigationContainer>
		</Context>
		)}
}