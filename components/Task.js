import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF', padding:5,paddingEnd:10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 5,
    },
    itemLeft: {
        flexDirection: "row", alignItems: 'center', flexWrap: 'wrap',
    },
    square: {
        width: 24, height: 24, backgroundColor: '#55BCF6', opacity: 0.64, borderRadius: 5, margin: 15,
    },
    text: {
        maxWidth: '80%',
    },
    circular: {
        width: 12, height: 12, borderColor: '#55BCF6', borderWidth: 2, borderRadius: 4
    },
});
export default Task;