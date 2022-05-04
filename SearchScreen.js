import { useRef, useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Dimensions, Animated } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { markers } from "./MapData";
import SalonRating from "./SalonRating";

const { width, height } = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const SearchScreen = () => {

    const initalMapState = {
        markers,
        region: {
            latitude: 53.5500,
            longitude: 2.4333,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        }
    };

    const [state, setState] = useState(initalMapState);

    let mapIndex = 0;
    //Animated value is 0 by default
    let mapAnimation = new Animated.Value(0);

    useEffect(() => {
        // listener will get the value that holds the index of the current item
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= state.markers.length) {
                index = state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            //check if index matches with the map index
            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    //get coordinate from markers array and animate to that area
                    const { coordinate } = state.markers[index];
                    _map.current.animateToRegion(
                        {
                            //find the region
                            ...coordinate,
                            latitudeDelta: state.region.latitudeDelta,
                            longitudeDelta: state.region.longitudeDelta,
                        },
                        800
                    );
                }
            }, 10);
        });
    });

    //animation values
    const interpolations = state.markers.map((marker, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];

        //change the scaling for each marker when it is focused on
        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: "clamp"
        });

        return { scale };
    });

    //display location card when marker is presses
    const onMarkerPress = (mapEventData) => {
        //will return the id of the marker
        const markerID = mapEventData._targetInst.return.key;

        // determines x value of the card element
        let x = (markerID * CARD_WIDTH) + (markerID * 20);
        // for IOS
        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
        }

        // scroll to card item after clicking on marker
        _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    };

    const _map = useRef(null);
    const _scrollView = useRef(null);

    return (
        <View style={styles.container}>

            <MapView
                style={styles.map}
                //map reference created using 'useRef' function
                ref={_map}
                provider={PROVIDER_GOOGLE}
                initialRegion={state.region}
            >
                {/* for each map marker, display a location marker on the map */}
                {state.markers.map((marker, index) => {
                    const scaleStyle = {
                        transform: [
                            {
                                //pass in index for current item to be animated
                                scale: interpolations[index].scale,
                            },
                        ],
                    };
                    return (
                        <MapView.Marker key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
                            <Animated.View style={[styles.markerWrap]}>
                                <Animated.Image
                                    source={require('./assets/images/marker.png')}
                                    style={[styles.marker, scaleStyle]}
                                    resizeMode='cover'
                                >
                                </Animated.Image>
                            </Animated.View>
                        </MapView.Marker>
                    );
                })}
            </MapView>

            {/* Salon Location Cards */}
            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
                pagingEnabled
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment='center'
                // for IOS only
                contentInset={{
                    top: 0,
                    left: SPACING_FOR_CARD_INSET,
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET
                }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation,
                                }
                            }
                        }
                    ],
                    { useNativeDriver: true }
                )}
            >
                {/* map through each item in marker array */}
                {state.markers.map((marker, index) => (
                    <View style={styles.card} key={index}>
                        <Image
                            source={marker.image}
                            style={styles.cardImage}
                            resizeMode='cover'
                        />
                        <View style={styles.textContent}>
                            <Text numberOfLines={1} style={styles.cardTitle}>{marker.title}</Text>
                            <SalonRating ratings={marker.rating} />
                            <Text numberOfLines={1} style={styles.cardDescription}>{marker.decription}</Text>
                            <Text numberOfLines={1} style={styles.cardLocation}>{marker.location}</Text>
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    card: {
        elevation: 5,
        backgroundColor: "#FFF",
        borderRadius: 10,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 2,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: 'LibreBaskerville_700Bold',
    },
    cardDescription: {
        fontSize: 12,
        margin: 3,
        marginTop: 8,
        color: "#444",
        fontFamily: 'LibreBaskerville_400Regular',
    },
    cardLocation: {
        fontSize: 13,
        margin: 3,
        marginTop: 8,
        color: "#444",
        fontFamily: 'LibreBaskerville_700Bold',
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    marker: {
        width: 40,
        height: 40,
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default SearchScreen;