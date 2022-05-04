import { Component } from "react";
import { StyleSheet, Text, ImageBackground, ScrollView, Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const { width, height } = Dimensions.get('screen');

const imageW = width;
const imageH = height * 0.92;

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: [
                require('./assets/images/shampoo2.jpg'),
                require('./assets/images/conditioner1.jpg'),
                require('./assets/images/oils1.jpg'),
                require('./assets/images/conditioner2.jpg'),
                require('./assets/images/oils2.jpg'),
                require('./assets/images/oils3.jpg')
            ]
        };
    }

    render() {

        return (
            <ScrollView style={styles.container}>

                <ImageBackground
                    style={styles.mainImage}
                    source={require('./assets/images/afro-background9.jpeg')}
                    resizeMode='cover'
                >
                    <Text style={styles.title}>Welcome To The Curl Club</Text>
                </ImageBackground>

                <Text style={styles.productTitle}>Products of The Week</Text>

                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={350}
                    dotColor='#d7b4f3'
                    inactiveDotColor='#90A4AE'
                    ImageComponentStyle={{
                        borderRadius: 10,
                        width: '50%',
                        margin: 50,
                    }}
                    imageLoadingColor='#d7b4f3'
                />

                <Text style={styles.afroTipText}>Eat Healthy Meals For Your Hair Needs!</Text>

            </ScrollView>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    mainImage: {
        flex: 1,
        width: imageW,
        height: imageH,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        color: 'white',
        fontSize: 26,
        textAlign: 'center',
        fontFamily: 'LibreBaskerville_700Bold',
    },

    productTitle: {
        color: '#d7b4f3',
        fontSize: 28,
        fontFamily: 'LibreBaskerville_700Bold',
        textAlign: 'center',
        marginTop: 100,
    },
    afroTipText: {
        color: '#454545',
        fontFamily: 'LibreBaskerville_700Bold',
        backgroundColor: '#E8D1FD',
        fontSize: 28,
        textAlign: 'center',
        padding: 90,
        marginTop: 100,
    },
});
