import { Dimensions, StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <ImageBackground
                style={styles.mainImage}
                source={require('./assets/images/afro-girls.jpeg')}
                resizeMode='cover'
                blurRadius={5}
            >
            </ImageBackground>
            <View style={styles.header}>
                <Animatable.Image
                    animation='bounceIn'
                    source={require('./assets/adaptive-icon.png')}
                    style={styles.logo}
                    resizeMode='stretch'
                >
                </Animatable.Image>
            </View>

            <Animatable.View
                style={styles.footer}
                animation='fadeInUpBig'
            >
                <View style={styles.button}>
                    <TouchableOpacity style={styles.signInBtn} onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.signIn}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SplashScreen;

const { width, height } = Dimensions.get('screen');
const height_logo = height * 0.4;

const imageW = width;
const imageH = height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainImage: {
        flex: 1,
        width: imageW,
        height: imageH,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo,

    },
    title: {
        color: '#d7b4f3',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 10,
        fontSize: 16,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        color: '#454545',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        padding: 5,
        borderRadius: 50,
        flexDirection: 'row',
        fontFamily: 'LibreBaskerville_400Regular',
    },
    signInBtn: {
        backgroundColor: '#E8D1FD',
        borderRadius: 50,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: '#080808',
        shadowOpacity: 0.5,
        shadowOffset: { width: -2, height: 3 },
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
})