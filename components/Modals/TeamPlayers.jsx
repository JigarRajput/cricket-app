import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Pressable, TouchableOpacity, Alert, Image, Modal } from 'react-native';
import addIcon from '../../assets/add.png'
import backIcon from '../../assets/left.png'
import { TeamsContext } from '../../context/TeamsContext';
import { PlayersList } from '../PlayersList';
import AddPlayer from './AddPlayer';
const TeamPlayers = ({ id, visible, setVisible }) => {
    const [addPlayerShown, setAddPlayerShown] = useState(false)
    const { teams, setTeams } = useContext(TeamsContext)
    // console.log("this ran")
    const team = teams.filter((_team) => _team.id === id)[0]
    const players = team.players
    // console.log(players, "this is players from Team players modal", "\n value of visible is", visible)
    return (
        <Modal
            visible={visible}
            animationType='slide'
        >
            <View style={styles.mainContainer}>
                <Pressable onPress={() => setVisible(false)}>
                    <Image source={backIcon} style={{ width: 40, height: 45 }} />
                </Pressable>
                <Text style={styles.textStyles}>PLAYERS</Text>
                <Pressable onPress={() => setAddPlayerShown(true)}>
                    <Image source={addIcon} style={styles.addImgStyles} />
                </Pressable>
            </View>

            <PlayersList players={players} />
            <AddPlayer addPlayerShown={addPlayerShown} setAddPlayerShown={setAddPlayerShown} teamId={team.id} />
        </Modal>
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

export default TeamPlayers;