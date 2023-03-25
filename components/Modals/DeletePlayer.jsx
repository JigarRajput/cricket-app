import React, { useContext, useState } from "react";
import { View, Modal, Image, Pressable, Text } from 'react-native';
import PlayerContext from "../../context/players/PlayerContext";
import { deletePlayerStyles } from "../../styles/ModalStyles/DeletePlayerStyles";
import deleteImg from '../../assets/delete.png';
import { DeletePlayerContext } from "../../context/DeletePlayerContext";
const DeletePlayer = ({ id }) => {
    const { players, setPlayers } = useContext(PlayerContext)
    const { deletePlayerShown, setDeletePlayerShown } = useContext(DeletePlayerContext)
    return (
        <Modal
            transparent={true}
            visible={deletePlayerShown}
        >
            <View style={deletePlayerStyles.overlay}>
                <View style={deletePlayerStyles.mainContainer}>
                    <Image source={deleteImg}
                        style={{ width: 50, height: 60, padding: 10 }}
                    />
                    <View style={deletePlayerStyles.btnContainer}>
                        <Pressable style={deletePlayerStyles.confirmBtnStyles}
                            onPress={() => {
                                const updatedList = players.filter((_player) => _player.id !== id)
                                setPlayers(updatedList)
                                setDeletePlayerShown(false)
                            }}>
                            <Text>Confirm Delete</Text>
                        </Pressable>
                        <Pressable style={deletePlayerStyles.cancelBtnStyles}
                            onPress={() => setDeletePlayerShown(false)}>
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default DeletePlayer