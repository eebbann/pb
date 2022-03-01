import { View, Text } from 'react-native'
import React, {useState} from 'react' 


export default function Message({feed,setFeed,name}) {
	
	return (
		<View>
			<Text> {name} </Text> 
			<Text> {feed.id}</Text>

		</View>
	)
}