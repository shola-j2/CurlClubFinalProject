import { StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import UploadImage from "./UploadImage";
import UploadProductImage from "./UploadProductImage";
import { useState } from "react";

const { width, height } = Dimensions.get('screen');

const cardW = width * 0.9;
const cardH = cardW * 1.7;

const data = [
    // { 
    //     items: [...items]
    // },
    // {
    //     id: 'entry1',
    //     date: new Date().getDate(),
    //     month: new Date().getMonth() + 1,
    //     year: new Date().getFullYear(),
    // },
    // {
    //     id: 'entry2',
    //     date: new Date().getDate(),
    // },
    // {
    //     id: 'entry3',
    //     date: new Date().getDate(),
    // },
];

const Item = ({ date, month, year }) => (
    <View style={styles.container}>
        <View style={styles.imagePicker}>
            <UploadImage />
            <Text style={styles.dateDisplay}>{date}/{month}/{year}</Text>
            <Text style={styles.productTitle}>Products Used</Text>
            <View style={styles.productContent}>
                <UploadProductImage />
                <UploadProductImage />
                <UploadProductImage />
            </View>
        </View>
    </View>
);

const HairProgress = () => {
    const [{ items }, setItems] = useState({ items: [] });
    const addHairEntry = () => {
        items.push(<Item key={items.length}/>);
        setItems({ items: [...items] });
    }

    var date = new Date().getDate(); //Current Day
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year

    const renderItem = ({ item }) => (
        <Item key={items.length} date={date} month={month} year={year} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Hair Progress</Text>
                <TouchableOpacity
                    style={styles.hairEntryBtn}
                    onPress={addHairEntry}
                >
                    <AntDesign name='pluscircle' size={35} color='#d7b4f3' />
                </TouchableOpacity>
            </View>


            <SafeAreaView style={styles.container}>

                <Text style={styles.addText}>Press '+' to add an update!</Text>

                <FlatList
                    data={items}
                    renderItem={renderItem}
                    keyExtractor={items => items.id}
                    horizontal
                    pagingEnabled
                    snapToAlignment='center'
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 22,
        marginTop: 85,
        marginRight: 20,
        textAlign: 'center',
        color: '#454545',
        fontFamily: 'LibreBaskerville_700Bold',
    },
    addText: {
        textAlign: 'center',
        fontSize: 16,
        margin: 10,
        color: '#454545',
        fontFamily: 'LibreBaskerville_400Regular',
    },
    hairEntryBtn: {
        marginTop: 80,
    },
    dateDisplay: {
        fontSize: 22,
        margin: 40,
        textAlign: 'center',
        fontFamily: 'LibreBaskerville_400Regular',
        color: '#454545',
    },
    productTitle: {
        fontSize: 22,
        margin: 10,
        textAlign: 'center',
        fontFamily: 'LibreBaskerville_400Regular',
        color: '#454545',
    },
    cameraBtnContainer: {
        backgroundColor: '#fff000',
        alignItems: 'center',
    },
    imagePicker: {
        width: cardW,
        height: cardH,
        padding: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        // - - - border - - - 
        borderRadius: 20,

        // - - - shadow - - -
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    productContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImages: {
        width: 100,
        height: 100,
        margin: 15,
        borderRadius: 20,
    },
});

export default HairProgress;