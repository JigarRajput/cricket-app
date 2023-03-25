// jai Ganesh
import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, Alert } from 'react-native';
import { TeamContext } from '../context/TeamContext';
import { headerStyles } from '../styles/HeaderStyles';
const Header = ({ openAdd, openAddPlayer }) => {
    const { teamName } = useContext(TeamContext)
    {/* if team name is available show team name or show Make your team*/ }
    return (
        <View style={styles.parentContainer}>
            <View style={headerStyles.mainContainer}>
                <View>
                    <Text style={headerStyles.teamText}>{teamName ? teamName : 'Make Team!'}</Text>
                </View>
                <View style={headerStyles.btnContainer}>
                    <TouchableOpacity style={headerStyles.btn}
                        onPress={() => openAdd(true)}>
                        <Text style={headerStyles.btnText}>{teamName ? "Edit Team" : 'Add Team'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={headerStyles.btn}
                        onPress={() => teamName ? openAddPlayer(true) : Alert.alert("First make a team")}>
                        <Text style={headerStyles.btnText}>Add Player</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row'
    },
    parentContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Header;