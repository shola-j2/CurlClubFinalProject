import React from 'react';
import { StyleSheet, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SalonRating = (props) => {

    // This array will contain our star tags. We will include this
    // array between the view tag.
    let stars = [];
    // Loop 5 times
    for (var i = 1; i <= 5; i++) {
        // set the path to filled stars
        let name = 'ios-star';
        // If ratings is lower, set the path to unfilled stars
        if (i > props.ratings) {
            name = 'ios-star-outline';
        }

        stars.push((<Ionicons name={name} size={20} style={styles.star} key={i} />));
    }

    return (
        <View style={styles.container}>
            {stars}
        </View>
    );

}

export default SalonRating;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        color: '#FF8C00',
        padding: 3,
    },
});