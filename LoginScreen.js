import React, { useContext, useState } from 'react';

import { TextInput, View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { AuthContext } from './components/Context';

const LoginScreen = ({navigation}) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const { login } = useContext(AuthContext);

    const textInputChange = (val) => {
        if (val.length != 0) {
            //update the state
            setData({
                //get existing state of data
                // ... - spread syntax
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    };

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    };

    const updateSecureDataEntry = () => {
        setData({
            ...data,
            //set to its opposite value
            secureTextEntry: !data.secureTextEntry
        });
    };

    return (
        <View style={styles.container}>

            <StatusBar 
                backgroundColor='#d7b4f3'
                barStyle='light-content'>

            </StatusBar>

            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome to the Curl Club!</Text>
            </View>

            <Animatable.View 
                animation='fadeInUpBig'
                style={styles.footer}
            >
                <Text style={[styles.text_footerTitle]}>Login</Text>
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <AntDesign
                        name='user'
                        color='black'
                        size={25}
                    />
                    <TextInput
                        placeholder='Username'
                        autoCapitalize='none'
                        style={styles.textInput}
                        //pass value that will take us to the function
                        onChangeText={(val) => textInputChange(val)}
                    >
                    </TextInput>

                    {/* if the data is present, then the icon will be displayed */}
                    {data.check_textInputChange ?
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        />
                        : null}
                </View>

                <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
                <View style={styles.action}>
                    <AntDesign
                        name='lock'
                        color='black'
                        size={25}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize='none'
                        style={styles.textInput}
                        onChangeText={(val) => handlePasswordChange(val)}
                    >
                    </TextInput>
                    <TouchableOpacity
                        onPress={updateSecureDataEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name='eye-off'
                                color='black'
                                size={20}
                            />
                            :
                            <Feather
                                name='eye'
                                color='black'
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    
                    <TouchableOpacity 
                        style={styles.signInBtn}
                        onPress={() => {login()}}
                    >
                        <Text style={styles.signIn}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.signUpBtn}
                        onPress={() => navigation.navigate('SignupScreen')}
                    >
                        <Text style={styles.signUp}>Sign Up</Text>
                    </TouchableOpacity>
                    
                </View>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8D1FD',
        
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,

        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,

        // - - - shadow - - -
         shadowColor: "#000",
         shadowOffset: { width: 2, height: 2 },
         shadowOpacity: 0.3,
         shadowRadius: 10,
         elevation: 8,
    },
    text_header: {
        color: '#454545',
        fontSize: 25,
        fontFamily: 'LibreBaskerville_700Bold',
        textAlign: 'center'
    },
    text_footer: {
        color: '#454545',
        fontSize: 18,
        fontFamily: 'LibreBaskerville_400Regular',
    },
    text_footerTitle: {
        color: '#454545',
        fontSize: 28,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40,
        fontFamily: 'LibreBaskerville_700Bold',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: '#454545',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
        fontFamily: 'LibreBaskerville_700Bold',
    },
    signInBtn: {
        backgroundColor: '#E8D1FD',
        borderRadius: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        shadowColor: '#080808',
        shadowOpacity: 0.4,
        shadowOffset: {width: 2, height: 2},
    },
    signUp: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        color: '#454545',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
        fontSize: 20,
        fontFamily: 'LibreBaskerville_700Bold',
    },
    signUpBtn: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderColor: '#E8D1FD',
        borderWidth: 3,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default LoginScreen;