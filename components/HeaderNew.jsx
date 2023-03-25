// jai Ganesh
import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, Alert, Image } from 'react-native';
import { TeamContext } from '../context/TeamContext';
import { headerStyles } from '../styles/HeaderStyles';
import addIcon from '../assets/add.png'
const HeaderNew = ({ openAdd }) => {
    // const { teamName } = useContext(TeamContext)
    return (
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.textStyles}>Your Teams</Text>
            </View>
            <Pressable onPress={() => openAdd(true)}>
                <Image source={addIcon} style={styles.addImgStyles} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        height: 58,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textStyles: {
        fontSize: 20
    },
    addImgStyles: {
        width: 40,
        height: 45
    }
});

export default HeaderNew;