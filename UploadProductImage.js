import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadProductImage() {

    //ask permission for access to user's camera roll
    const checkForCameraRollPermission = async () => {
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("Please grant camera roll permissions in your settings");
        } else {
            console.log('Camera Roll Access Granted')
        }

        useEffect(() => {
            checkForCameraRollPermission()
        }, []);

    };

    const [image, setImage] = useState(null);

    // opens the system UI to select images from the user’s device
    const addImage = async () => {
        //returns an image object
        let _image = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            //allows the user to rotate/crop any image they select
            allowsEditing: true,
            //fixed aspect ratio for cropped image
            aspect: [4, 3],
            // only values are between 0 and 1, 0 is lower quality, 1 is higher quality
            quality: 1,
        });

        console.log(JSON.stringify(_image));

        //if the system UI was closed without selecting an image
        if (!_image.cancelled) {
            setImage(_image.uri);
        }
    };

    return (
        <View style={imageUploaderStyles.container}>
            {
                image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
            }

            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                    <Text>{image ? '' : (<AntDesign name='plus' size={28} color="black" />)}</Text>
                </TouchableOpacity>
            </View>


        </View>

    );
}

const imageUploaderStyles = StyleSheet.create({
    container: {
        elevation: 2,
        height: 100,
        width: 100,
        margin: 10,
        backgroundColor: '#efefef',
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
    },
    uploadBtnContainer: {
        opacity: 0.9,
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})