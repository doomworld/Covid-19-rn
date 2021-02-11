import React, {
	useState,
	useEffect,
	useRef,
	forwardRef,
	useImperativeHandle,
} from 'react';
import {
	StyleSheet,
	UIManager,
	View,
	Animated,
	PanResponder,
	Dimensions,
	LayoutAnimation,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const Deck = forwardRef((props, ref) => {
	// states
	const [index, setIndex] = useState(0);

	// function to update index state to pass parent
	const reloadDeck = () => {
		setIndex(0);
	};

	/** function which passes to parent using ref variable
	 * using useImperativeHandle which takes ref and callback to
	 * pass to parent
	 */
	useImperativeHandle(ref, () => {
		return {
			reloadDeck,
		};
	});

	// state assignments
	const position = useRef(new Animated.ValueXY()).current;
	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({
					x: gesture.dx,
					y: gesture.dy,
				});
			},
			onPanResponderRelease: (event, gesture) => {
				if (gesture.dx > SWIPE_THRESHOLD) {
					forceSwipe('right');
				} else if (gesture.dx < -SWIPE_THRESHOLD) {
					forceSwipe('left');
				} else {
					resetPosition();
				}
			},
		})
	).current;

	/*/equivalent of componentwillReciveProps == useEffect
	// useEffect runs here*/
	useEffect(() => {
		// check for data exist or not if not then don't run
		if (props.data) {
			setIndex(0);
		}

		UIManager.setLayoutAnimationEnabledExperimental &&
			UIManager.setLayoutAnimationEnabledExperimental(true);
		LayoutAnimation.spring();
	}, [props.data]);

	// force swipe function to be
	const forceSwipe = (direction) => {
		const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
		const y = 0;

		Animated.timing(position, {
			useNativeDriver: false,
			toValue: { x, y },
			duration: SWIPE_OUT_DURATION,
		}).start(() => onSwipeComplete(direction));
	};

	// onSwipeComplete function
	const onSwipeComplete = (direction) => {
		const item = props.data[index];

		direction === 'right' ? props.onSwipeRight(item) : props.onSwipeLeft(item);
		position.setValue({
			x: 0,
			y: 0,
		});
		setIndex((prevState) => prevState + 1);
	};

	// reset card position component
	const resetPosition = () => {
		console.log('resetPosition is clicked');
		Animated.spring(position, {
			useNativeDriver: false,
			toValue: { x: 0, y: 0 },
		}).start();
	};

	// cardstyle define here
	const getCardStyle = () => {
		const rotate = position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
			outputRange: ['-120deg', '0deg', '120deg'],
		});
		return {
			...position.getLayout(),
			transform: [{ rotate }],
		};
	};

	// render card component
	const renderCards = () => {
		if (index >= props.data.length) {
			return props.renderNoMoreCards();
		}
		return props.data
			.map((item, i) => {
				if (i < index) {
					return null;
				}
				if (i === index) {
					return (
						<Animated.View
							key={item.id}
							style={[
								getCardStyle(),
								styles.cardStyle,
								{
									zIndex: 99,
								},
							]}
							{...panResponder.panHandlers}
						>
							{props.renderCard(item)}
						</Animated.View>
					);
				}
				return (
					<Animated.View key={item.id} style={[styles.cardStyle]}>
						{props.renderCard(item)}
					</Animated.View>
				);
			})
			.reverse();
	};

	return <View>{renderCards()}</View>;
});

// defual props for deck functional component
Deck.defaultProps = {
	onSwipeRight: (e) => {
		// console.log('right swipe', e);
	},
	onSwipeLeft: (e) => {
		// console.log('left swipe', e);
	},
};

export default Deck;

const styles = StyleSheet.create({
	cardStyle: {
		position: 'absolute',
		width: SCREEN_WIDTH,
	},
});
