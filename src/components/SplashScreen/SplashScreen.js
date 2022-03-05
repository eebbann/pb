import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Logo....
import Logo from "../../../assets/images/logo.png";
import Home from "../../screens/Home";

const BGColor = "#061853";

export default function SplashScreen() {
	// SafeArea Value...
	const edges = useSafeAreaInsets();

	// Animation Values....
	const startAnimation = useRef(new Animated.Value(0)).current;

	// Scaling Down Both logo and Title...
	const scaleLogo = useRef(new Animated.Value(1)).current;
	const scaleTitle = useRef(new Animated.Value(1)).current;

	// Offset Animation....
	const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
	const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

	// Animating COntent...
	const contentTransition = useRef(
		new Animated.Value(Dimensions.get("window").height)
	).current;

	// Animation Done....
	useEffect(() => {
		// Starting Animation after 500ms....
		setTimeout(() => {
			// Parallel Animation...
			Animated.parallel([
				Animated.timing(startAnimation, {
					// For same Height for non safe Area Devices...
					toValue: -Dimensions.get("window").height + (edges.top + 100),
					useNativeDriver: true,
				}),
				Animated.timing(scaleLogo, {
					// Scaling to 0.35
					toValue: 0.5,
					useNativeDriver: true,
				}),

				Animated.timing(moveLogo, {
					// Moving to Right Most...
					toValue: {
						x: Dimensions.get("window").width / 2 - 45,
						y: Dimensions.get("window").height / 2 - 1,
					},
					useNativeDriver: true,
				}),

				Animated.timing(contentTransition, {
					toValue: 0,
					useNativeDriver: true,
				}),
			]).start();
		}, 500);
	}, []);

	// Going to Move Up like Nav Bar...
	return (
		<View
			style={{
				position: "absolute",
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
			}}
		>
			<Animated.View
				style={{
					flex: 1,
					backgroundColor: BGColor,
					zIndex: 1,
					transform: [{ translateY: startAnimation }],
				}}
			>
				<Animated.View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Animated.Image
						source={Logo}
						style={{
							width: 100,
							height: 100,
							marginBottom: 20,
							transform: [
								{ translateX: moveLogo.x },
								{ translateY: moveLogo.y },
								{ scale: scaleLogo },
							],
						}}
					></Animated.Image>
				</Animated.View>
			</Animated.View>

			<Animated.View
				style={{
					position: "absolute",
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
					backgroundColor: "rgba(0,0,0,0.04)",
					zIndex: 0,
					transform: [{ translateY: contentTransition }],
				}}
			>
				<Home />
			</Animated.View>
		</View>
	);
}
