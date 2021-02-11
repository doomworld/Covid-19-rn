import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Buttons = ({ name, number }) => {
	return (
		<View style={styles.container}>
			<View style={styles.circle}>
				<Text style={styles.textInfo}>i</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
				}}
			>
				<Text style={styles.btnName}>{name}</Text>
				<Text style={styles.number}>{number}</Text>
			</View>
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
		marginTop: 8,
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
		flex: 1,
		fontWeight: 'bold',
		color: '#ffffff',
		fontSize: 12,
		marginLeft: 10,
	},
	number: {
		fontWeight: 'bold',
		color: 'red',
		fontSize: 12,
		marginRight: 20,
	},
});
