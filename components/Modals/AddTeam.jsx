import React, { useContext, useRef, useState } from "react";
import { View, Modal, TextInput, Pressable, Text } from 'react-native';
import { addTeamStyles } from "../../styles/ModalStyles/AddTeamStyles";;
import { TeamsContext } from "../../context/TeamsContext";
const AddTeam = ({ addShown, setAddShown }) => {
    const { teams, setTeams } = useContext(TeamsContext)
    const [team, setTeam] = useState('')

    const handleAddTeam = () => {
        let newId;
        if (teams.length === 0) // if no teams, first team id 1
            newId = 1;
        else {
            const maxIdObject = teams.reduce(((accumulator, current) => accumulator.id > current.id ? accumulator : current), 0);
            newId = maxIdObject.id + 1
        }

        const newTeam = {
            id: newId,
            players: [],
            team_name: team
        }

        setTeams([...teams, newTeam])
        setAddShown(false)
    }

    return (
        <Modal
            transparent={true}
            visible={addShown}
        >
            <View style={addTeamStyles.overlay}>
                <View style={addTeamStyles.mainContainer}>
                    <TextInput placeholder="Enter Team Name..."
                        onChangeText={(text) => setTeam(text)}
                        maxLength={12}
                        defaultValue={''}
                    />
                    <View style={addTeamStyles.btnContainer}>
                        <Pressable style={addTeamStyles.addBtnStyles}
                            onPress={handleAddTeam}>
                            <Text>{"Add Team"}</Text>
                        </Pressable>
                        <Pressable style={addTeamStyles.cancelBtnStyles}
                            onPress={() => setAddShown(false)}>
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AddTeam