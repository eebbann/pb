import {
	StyleSheet,
	Dimensions,
	Text,
	View,
	TextInput,
	ActivityIndicator,
	FlatList,
	Button,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Video, AVPlaybackStatus } from "expo-av";
//play button icon
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
	const [searchInput, setSearchInput] = useState("");
	const [feed, setFeed] = useState({});
	useEffect(() => {
		fetch(
			"http://157.230.11.142:5000/presentbox/00000000?text=Something%20Something%20Something&is_closed=true"
		)
			.then((response) => response.json())
			.then((data) => setFeed(data))
			.catch(function(error) {
				console.log(
					"There has been a problem with your fetch operation: " + error.message
				);
				// ADD THIS THROW error
				throw error;
			});
	}, []);
	const video = React.useRef(null);
	const [status, setStatus] = React.useState({});

	const { width, height } = Dimensions.get("screen");
	return (
		<View style={styles.main}>
			<View style={[styles.section, { height: height / 1.7 }]}>
				<Text style={styles.heading}>View Expression</Text>
				<View style={styles.search}>
					<TextInput
						value={searchInput}
						onChangeText={(val) => (setSearchInput = val)}
						style={styles.input}
						placeholder="Search"
						placeholderTextColor="#000"
					/>
				</View>
				{fetch.length < 1 ? (
					<ActivityIndicator size="large" color="white" />
				) : (
					<Video
						ref={video}
						style={styles.video}
						source={{
							uri: "http://157.230.11.142:5000/presentbox/download/00000000",
						}}
						useNativeControls
						resizeMode="cover"
						isLooping
						onPlaybackStatusUpdate={(status) => setStatus(() => status)}
						onError={(error) => setStatus(() => ({ status, error }))}
					/>
				)}
			</View>
			<View style={styles.curve}>
			<View style={styles.buttons}>
				<TouchableOpacity
					onPress={() =>
						status.isPlaying
							? video.current.pauseAsync()
							: video.current.playAsync()
					}
				>
					{/* play button */}
					<View style={styles.button}>
						{status.isPlaying ? (
							<Ionicons name="pause-circle" size={52} color="#ffff" />
						) : (
							<Ionicons name="play-circle" size={52} color="#ffff" />
						)}
					</View>
				</TouchableOpacity>
			</View>
			{/* display error when video is not playing */}
			{status.error && <Text>{status.error ? feed.text : null}</Text>}
			{/* display list of feed state using flatlist */}

			<FlatList
				data={feed}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
			/>
			<View style={styles.feedText}>
				<Text style={styles.heading}>{feed.id}</Text>
			</View>
			</View>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#8da9f3",
		 

	},
	curve: {
		flex: 1,
		backgroundColor: "#8da9f3",
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		marginTop: -10,  

	},
	section: {
		backgroundColor: "#061853",
		width: "100%",
	},
	feedText: {
		fontSize: 20,
		color: "#ffff",
	},
	video: {
		flex: 1,
		alignSelf: "stretch",
		height: "100%",
		width: "100%",
		borderBottomWidth: 0,
		borderBottomColor: "#061853",
		paddingBottom: 10,
	},

	buttons: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		fontSize: 14,
		fontWeight: "bold",
		borderWidth: 1,
		marginTop: 10,
		borderColor: "gray",
		alignItems: "center",
		maxWidth: "100%",
		borderRadius: 50,
		padding: 10,
	},
	heading: {
		fontSize: 24,
		fontFamily: "Montserrat_800ExtraBold",
		color: "#ffff",
		letterSpacing: 3,
		padding: 20,
		marginTop: 64,
	},
	input: {
		width: "95%",
		height: 40,
		borderRadius: 8,
		borderWidth: 1,
		backgroundColor: "#ebebeb",
		paddingLeft: 10,
		marginTop: 0,
		marginBottom: 20,
		fontSize: 16,
		fontFamily: "Montserrat_400Regular",
		letterSpacing: 1,
	},
	search: {
		display: "flex",
		alignItems: "center",
	},
	mainPostView: {
		width: "100%",
	},
	postTitle: {
		display: "flex",
		width: "90%",
		justifyContent: "space-between",
		backgroundColor: "#ededed",
		flexDirection: "row",
	},
	postView: {
		width: "100%",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
