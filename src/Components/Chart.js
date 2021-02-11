import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Chart = ({ data }) => {
	// console.log(`width => ${width} \n height => ${height}`);
	return (
		<View
			style={{
				marginHorizontal: 20,
				marginTop: 20,
			}}
		>
			<LineChart
				data={data}
				width={width}
				height={height < 700 ? height * 0.35 : height * 0.5}
				yAxisLabel="#"
				yAxisSuffix="k"
				yAxisInterval={1}
				chartConfig={{
					backgroundColor: '#fff',
					backgroundGradientFrom: '#fff',
					backgroundGradientTo: '#fff',
					decimalPlaces: 2,
					color: (opacity = 0) => `rgba(255,0,0, ${opacity})`,
					labelColor: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
					style: {
						borderRadius: 16,
					},
					propsForDots: {
						r: '6',
						strokeWidth: '2',
						stroke: 'red',
					},
				}}
				bezier
				style={{
					marginVertical: 2,
					borderRadius: 16,
					zIndex: 0,
				}}
			/>
		</View>
	);
};

export default Chart;
