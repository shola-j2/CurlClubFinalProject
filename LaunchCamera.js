import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const LaunchCamera = () => {
    let options = {
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    ImagePicker.launchCameraAsync(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
        } else {
            const source = { uri: response.uri };
            console.log('response', JSON.stringify(response));
            this.setState({
                filePath: response,
                fileData: response.data,
                fileUri: response.uri
            });
        }
    });

    return(
        <View style={styles.cameraBtnContainer}>
                <TouchableOpacity style={styles.cameraBtn}>
                    <Text>Take Photo</Text>
                    <AntDesign name="camera" size={25} color="black" />
                </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    cameraBtnContainer: {
        backgroundColor: '#fff000',
        alignItems: 'center',
    },
    cameraBtn: {

    },

});

export default LaunchCamera;