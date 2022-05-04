import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function UploadImage() {

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

        //if the system UI was closed without selecting an image, leave it blank
        if (!_image.cancelled) {
            setImage(_image.uri);
        }
    };

    return (
        <View style={imageUploaderStyles.container}>
            {
                image && <Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
            }

            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                    <Text style={imageUploaderStyles.uploadText}>{image ? 'Edit' : 'Upload'} Image</Text>
                    <AntDesign name="camera" size={20} color="black" />
                </TouchableOpacity>
            </View>


        </View>

    );
}

const imageUploaderStyles = StyleSheet.create({
    container: {
        elevation: 2,
        height: 250,
        width: 250,
        backgroundColor: '#efefef',
        position: 'relative',
        borderRadius: 999,
        overflow: 'hidden',
    },
    uploadBtnContainer: {
        opacity: 0.7,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '25%',
    },
    uploadBtn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    },
    uploadText: {
        fontFamily: 'LibreBaskerville_400Regular',
        color: '#454545'
    },
})