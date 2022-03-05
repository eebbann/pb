import { StyleSheet, Text, View } from 'react-native';
import React,{useContext, useState} from 'react'; 
import { FeedContext } from '../../Context';
 

const Messages = ( ) => { 
	const{ feed }= useContext(FeedContext)
	console.log(feed);
	return (
		<View>
				{/* need to add the props data here Home */}
				
			<Text>Messages</Text>
		</View>
	);
};

export default Messages;

const styles = StyleSheet.create({});
