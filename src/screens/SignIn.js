import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'; 
import Home from './Home';
const SignIn = ({navigation}) => {
const pushStack = () => {
		navigation.navigate('Home');
	};

	return (
		<View style={styles.main}>
				<View style={styles.top}>
					<Image style={styles.logo} source={require('../../assets/images/logo.png')} />
				</View>
				<View style={styles.bottom}> 
				{/* //login form */}
				<Text style={styles.header}>- WELCOME -</Text>
					<View style={styles.form}>
						<Text style={styles.text}>Email</Text>
						<TextInput style={styles.input} placeholder="Email" placeholderTextColor="white"/>
						<Text style={styles.text}>Password</Text>
						<TextInput style={styles.input} placeholder="Password" placeholderTextColor="white"/>
						 <TouchableOpacity style={styles.button} onPress={pushStack}>
							<Text style={styles.buttonText}>Sign In</Text>
									</TouchableOpacity>
				</View> 
				<View>
					<Image style={styles.vector} source={require('../../assets/images/line.png')} />
				</View>
		</View>
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	main:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		flexDirection: 'column',
		backgroundColor:'white'

	},
	header:{
	color:'white',
	fontFamily:'Montserrat_800ExtraBold',
	letterSpacing:3,
	fontSize:24,
	marginBottom:20,
	textAlign:'center',
	paddingTop: 20,
	marginTop:64,
	},
	logo:{
		width:"50%", 
		resizeMode:'contain',
	},
	vector:{
		width:"100%",
		resizeMode:'contain', 
		position: 'relative',
		top:-100,
		bottom:0,
	},
	top:{
		width:'100%',
		height:'30%',
		 backgroundColor:'#ffff',
		 display: 'flex',
		 justifyContent: 'center',
		 alignItems: 'center',
	},
	bottom:{
		width:'100%',
		height:'70%',
		backgroundColor:'black',
		borderTopRightRadius:30,
		borderTopLeftRadius:30,

	},
	form:{
		width:'100%', 
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection:'column',
		padding:20,
		fontFamily:'Lato-Regular',
		fontSize:20,
		color:'white',
	},
	title:{
		fontFamily:'Montserrat_500Medium',
		fontSize:18,
		textAlign:'center',
		paddingTop: 20,
		color: 'white',
	},
 
	input:{
		width:'100%',
		height:40,
		borderColor:'white',
		borderWidth:1,
		borderRadius:10,
		padding:10,
		color:'#808080',
		marginBottom:10,

	},
	button:{
		width:'100%',
		height:50,
		borderRadius:10,
		backgroundColor:'#fff',
		justifyContent:'center',
		alignItems:'center',
		marginTop:20,
		marginBottom:20,
	},
	buttonText:{
		fontFamily:'Montserrat_800ExtraBold',
		fontSize:18,
		color:'grey',
		textAlign:'center',
	},
});
