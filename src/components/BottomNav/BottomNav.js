import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Messages from "../../screens/Messages";
import SignIn from "../../screens/SignIn";
import SplashScreen from "../SplashScreen/SplashScreen";

const Tab = createBottomTabNavigator();

function BottomNav() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: "#061853" },
				tabBarInactiveTintColor: "#c2cbf0",
				tabBarActiveTintColor: "white",
			}}
			initialRouteName={Home}
		>
			<Tab.Screen
				name=" "
				component={SplashScreen}
				options={{
					headerStyle: {
						backgroundColor: "yellow",
						shadowColor: "transparent",
					},
					tabBarIconStyle: { display: "none" },
					tabBarButton: () => null,
					tabBarVision: "false",
					headerShown: false,
					headerTintColor: "#fff",
				}}
			/>
			<Tab.Screen
				name="Home"
				component={Home}
				person="person A"
				options={{
					headerStyle: {
						backgroundColor: "#311432",
				 		shadowColor: "transparent",
					},
					headerShown: false,
					headerTintColor: "#fff",
					headerTitleStyle: {
						fontWeight: "bold",
						fontFamily: "Lato_700Bold",
					},
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="videocam-outline" color={color} size={size} />
					),
				}}
			/>

			<Tab.Screen
				name="Messages"
				component={Messages}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="message1" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default BottomNav;
