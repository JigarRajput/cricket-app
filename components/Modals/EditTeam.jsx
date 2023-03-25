import React, { useContext, useState } from "react";
import { View, Modal, TextInput, Pressable, Text } from 'react-native';
import { addTeamStyles } from "../../styles/ModalStyles/AddTeamStyles";;
import { TeamsContext } from "../../context/TeamsContext";
const EditTeam = ({ editShown, setEditShown, id }) => {
    const { teams, setTeams } = useContext(TeamsContext)
    const [team, setTeam] = useState('')

    let team_to_update = teams.filter((_team_) => _team_.id === id)[0]

    const handleSave = () => {
        team_to_update.team_name = team;

        let rest_teams = teams.filter((_team_) => _team_.id !== id)
        setTeams([...rest_teams, team_to_update])
        setEditShown(false)
    }

    return (
        <Modal
            transparent={true}
            visible={editShown}
        >
            <View style={addTeamStyles.overlay}>
                <View style={addTeamStyles.mainContainer}>
                    <TextInput placeholder="Enter Team Name..."
                        onChangeText={(text) => setTeam(text)}
                        maxLength={12}
                        defaultValue={team_to_update.team_name}
                    />
                    <View style={addTeamStyles.btnContainer}>
                        <Pressable style={addTeamStyles.addBtnStyles}
                            onPress={handleSave}>
                            <Text>Save Changes</Text>
                        </Pressable>
                        <Pressable style={addTeamStyles.cancelBtnStyles}
                            onPress={() => setEditShown(false)}>
                            <Text>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default EditTeam