import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Detail from '../Screens/Detail';

const Stack = createStackNavigator();
const screenOptionStyle = {
	headerShown: false,
};

const Navigator = () => {
	return (
		<Stack.Navigator
			screenOptionStyle={screenOptionStyle}
			screenOptions={screenOptionStyle}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Detail" component={Detail} />
		</Stack.Navigator>
	);
};

export default Navigator;

const styles = StyleSheet.create({});
