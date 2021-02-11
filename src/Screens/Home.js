import React, { useRef } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Buttons from '../Components/Buttons';
import Cards from '../Components/Cards';
import Deck from '../Components/Deck';

const DATA = [
	{ id: 1, title: 'Corona Virus Cases', number: '1 838 456' },
	{ id: 2, title: 'Total Deaths', number: '1 29 863' },
	{ id: 3, title: 'Recovered', number: '838 456' },
];

const Home = ({ navigation }) => {
	const ref = useRef(null);

	// calling ref inside reloadCards to call child ref function
	const reloadCards = () => {
		ref.current.reloadDeck();
	};

	const renderNoMoreCards = () => {
		return (
			<View title="All Done!" style={styles.noMoreCards}>
				<Text style={styles.noCard}>No More Cards Here</Text>
				<View style={{ padding: 10, marginHorizontal: 30 }}>
					<Button color="red" title="Get More!" />
				</View>
			</View>
		);
	};

	const renderCard = (item) => {
		return (
			<View style={styles.cardContainer}>
				<View style={styles.card}>
					<View>
						<Text style={styles.title}>{item.title}</Text>
						<Ionicons
							name="ios-remove"
							size={40}
							color="red"
							style={{
								marginTop: 10,
							}}
						/>
						<Text style={styles.number}>{item.number}</Text>
					</View>
					<View style={{ marginLeft: 150 }}>
						<Ionicons
							name="md-options"
							size={24}
							color="#ffffff"
							style={{ marginBottom: 10 }}
						/>
						<Text style={styles.textCovid}>COVID-19</Text>
					</View>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<ImageBackground source={require('../images/bg.jpg')} style={styles.map}>
				<View style={styles.col}>
					<View style={{ width: '50%' }}>
						<Ionicons name="md-remove" color="#ffffff" size={26} />
						<Ionicons
							name="md-remove"
							color="#ffffff"
							size={26}
							style={styles.minusIcon}
						/>
					</View>
					<View style={styles.avatarContainer}>
						<Image
							source={require('../images/user.jpg')}
							style={styles.avatar}
						/>
					</View>
				</View>
				<Text style={styles.textDash}>CORONA DASH</Text>
				<View style={styles.colContainer}>
					<Text style={styles.textGlobal}>GLOBAL</Text>
					<Text style={styles.textIndia}>INDIA</Text>
					<TouchableOpacity
						style={styles.reloadContainer}
						onPress={reloadCards}
					>
						<Ionicons name="md-refresh" size={24} color="red" />
					</TouchableOpacity>
				</View>
			</ImageBackground>
			<Deck
				ref={ref} //passing ref
				data={DATA}
				renderCard={renderCard}
				renderNoMoreCards={renderNoMoreCards}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<ScrollView
					style={{ marginTop: 170 }}
					horizontal
					showsHorizontalScrollIndicator={false}
				>
					<Cards
						icon="md-pulse"
						title="TOTAL CASES"
						bg="red"
						number="113 329"
						onPress={() => navigation.navigate('Detail')}
					/>
					<Cards
						icon="ios-git-network"
						title="RECOVERED"
						bg="#FFFFFF"
						number="442 329"
						onPress={() => navigation.navigate('Detail')}
					/>
					<Cards
						icon="ios-heart-dislike"
						title="DEATH CASES"
						bg="#FFFFFF"
						number="113 329"
						onPress={() => navigation.navigate('Detail')}
					/>
				</ScrollView>
				<View style={{ marginTop: 34, marginBottom: 20 }}>
					<Buttons name="ASYMPTOMATIC" number="1 778" />
					<Buttons name="SYMPTOMATIC" number="1 578" />
				</View>
			</ScrollView>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#040406', //'#1c2732',
	},
	cardContainer: {
		height: 150,
		width: 320,
		alignSelf: 'center',
		backgroundColor: '#6a706e',
		borderRadius: 30,
	},
	card: {
		height: 150,
		width: 260,
		paddingTop: 20,
		paddingHorizontal: 30,
		backgroundColor: '#2b3240',
		borderRadius: 30,
		flexDirection: 'row',
	},
	title: {
		color: '#6a706e',
		width: 100,
		fontSize: 10,
		fontWeight: 'bold',
	},
	number: {
		color: '#ffffff',
		width: 100,
		fontSize: 13,
		fontWeight: 'bold',
		marginTop: -10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textCovid: {
		transform: [{ rotate: '-90deg' }],
		color: '#3a4b4f',
		fontSize: 12,
		width: 90,
		marginLeft: -35,
		fontWeight: 'bold',
		marginTop: 18,
	},
	noMoreCards: {
		position: 'absolute',
		marginHorizontal: 30,
		width: 300,
		height: 150,
		backgroundColor: '#2b3240',
		borderColor: '#6a706e',
		borderWidth: 1,
		borderRadius: 50,
		zIndex: 2,
	},
	noCard: {
		marginTop: 20,
		marginBottom: 20,
		color: '#ffffff',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	map: {
		height: 200,
		paddingTop: 25,
		paddingHorizontal: 20,
		marginBottom: 15,
	},
	col: {
		flexDirection: 'row',
	},
	minusIcon: {
		marginTop: -20,
		marginLeft: 5,
	},
	avatarContainer: {
		width: '50%',
		alignItems: 'flex-end',
	},
	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	textDash: {
		color: '#FFFFFF',
		fontSize: 20,
		alignSelf: 'center',
		marginTop: 15,
		fontWeight: 'bold',
	},
	colContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		marginTop: 40,
		marginBottom: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textGlobal: {
		fontWeight: 'bold',
		fontSize: 16,
		color: 'red',
	},
	textIndia: {
		fontWeight: 'bold',
		fontSize: 16,
		paddingHorizontal: 30,
		color: '#6a706e',
	},
	reloadContainer: {
		backgroundColor: '#ffffff',
		elevation: 2,
		width: 40,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 50,
		marginBottom: 3,
	},
});
