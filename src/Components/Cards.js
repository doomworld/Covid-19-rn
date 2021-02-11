import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Cards = ({ bg, icon, title, number, onPress }) => {
	return (
		<View
			style={{
				...styles.container,
				backgroundColor: bg,
			}}
		>
			<View style={styles.col}>
				<Ionicons
					name={icon}
					size={30}
					color={bg == 'red' ? '#ffffff' : 'red'}
				/>
				<TouchableOpacity onPress={onPress}>
					<MaterialCommunityIcons
						name="dots-vertical"
						size={30}
						color="#b8b8aa"
						style={{ marginLeft: 50 }}
					/>
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>{title}</Text>
			<Text
				style={{
					...styles.number,
					color: bg === 'red' ? '#ffffff' : '#000000',
				}}
			>
				{number}
			</Text>
		</View>
	);
};

export default Cards;

const styles = StyleSheet.create({
	container: {
		height: 200,
		width: 130,
		borderRadius: 30,
		padding: 15,
		marginLeft: 20,
	},
	col: {
		flexDirection: 'row',
	},
	title: {
		marginTop: 90,
		color: '#b8b8aa',
		fontSize: 12,
		fontWeight: 'bold',
	},
	number: {
		fontWeight: 'bold',
		fontSize: 22,
	},
});
