import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import Message from '../components/Message'; 
import Home from './Home';

const Messages = ( ) => {
const [feed, setFeed] = useState([]);
	return (
		<View>
			<Message feed={feed} name="jj"/>
			<Home feed={feed}/>
		</View>
	);
};

export default Messages;

const styles = StyleSheet.create({});
