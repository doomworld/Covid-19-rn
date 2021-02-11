import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Buttons = ({ name, number }) => {
	return (
		<View styles={style.container}>
			<View styles={style.circle}>
				<Text styles={style.textInfo}>i</Text>
			</View>
			<Text styles={style.btnName}>{name}</Text>
			<Text styles={style.number}>{number}</Text>
		</View>
	);
};

export default Buttons;

const styles = StyleSheet.create({
	container: {
		borderRadius: 15,
		borderColor: '#6a706e',
		borderWidth: 0.3,
		marginHorizontal: 30,
		paddingHorizontal: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 5,
	},
	circle: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 20,
		height: 20,
		borderRadius: 20,
		backgroundColor: '#2b3240',
	},
	textInfo: {
		color: '#6a706e',
		fontWeight: 'bold',
	},
	btnName: {
		fontWeight: 'bold',
		color: '#ffffff',
		fontSize: 12,
		marginLeft: 20,
	},
	number: {
		fontWeight: 'bold',
		color: 'red',
		fontSize: 14,
		marginLeft: 90,
	},
});
