import React, { useContext, useState } from "react";
import { View, Modal, TextInput, Pressable, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import PlayerContext from "../../context/players/PlayerContext";
import { EditPlayerContext } from "../../context/EditPlayerContext";
import { editPlayerStyles } from "../../styles/ModalStyles/EditPlayerStyles";
import { CustomInput } from "../CustomInput";
import { DropDown } from "../Dropdown";
import { TeamContext } from "../../context/TeamContext";
import { TeamsContext } from "../../context/TeamsContext";

const EditPlayer = ({ playerId }) => {
    const { teamId, setTeamId } = useContext(TeamContext)
    const { editPlayerShown, setEditPlayerShown } = useContext(EditPlayerContext)
    const { teams, setTeams } = useContext(TeamsContext)

    const players = teams.filter((_team) => teamId === _team.id)[0].players
    const player = players.filter((_player_) => _player_.id === playerId)[0]

    const [fname, setfname] = useState(() => player?.fname ?? '')
    const [lname, setlname] = useState(() => player?.lname ?? '')
    const [numRuns, setruns] = useState(() => player?.numRuns ?? '')
    const [age, setage] = useState(() => player?.age ?? '')
    const [type, settype] = useState(() => player?.playerType ?? '')
    const [matchCount, setmatchCount] = useState(() => player?.playedCount ?? '')
    const [Country, setCountry] = useState(() => player?.country ?? '')
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { label: 'Batsman', value: 'Batsman' },
        { label: 'Bowler', value: 'Bowler' },
        { label: 'Fielder', value: 'Fielder' },
        { label: 'All rounder', value: 'All rounder' },
    ];


    const handleSelect = (option) => {
        settype(option.value);
        setIsOpen(!isOpen)
    }

    const handleSavePlayer = () => {
        let update = players.filter((_player) => playerId !== _player.id)
        const playerNewData = {
            id: playerId,
            fname,
            lname,
            numRuns,
            age,
            playerType: type,
            playedCount: matchCount,
            country: Country
        }

        const _players_ = [...update, playerNewData]

        const team = teams.filter((_team_) => _team_.id === teamId)[0]
        console.log(team, "yeh hai team ki value")

        const newTeam = {
            id: team.id,
            players: _players_,
            team_name: team.team_name
        }
        team.players = _players_

        const rest_teams = teams.filter((_team_) => _team_.id !== teamId)
        setTeams([...rest_teams, team])

    }

    return (
        <Modal
            transparent={true}
            visible={editPlayerShown}
            animationType={'slide'}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : 'height'}
            >
                <View style={editPlayerStyles.overlay}>
                    <ScrollView style={editPlayerStyles.mainContainer}
                        contentContainerStyle={{ alignItems: 'center' }}>
                        <Text>Player Details</Text>
                        <CustomInput placeholder="Enter First Name..." onChangeText={(fName) => setfname(fName)} maxLength={12} validation={() => isNameValid(fname)} value={player.fname} />
                        <CustomInput placeholder="Enter Last Name..." onChangeText={(lName) => setlname(lName)} maxLength={12} validation={() => isNameValid(lname)} value={player.lname} />
                        <CustomInput placeholder="Age..." onChangeText={(AGE) => setage(AGE)} maxLength={2} inputMode={'numeric'} value={player.age} />
                        <CustomInput placeholder="Runs" onChangeText={(_runs) => setruns(_runs)} maxLength={6} inputMode={'numeric'} value={player.numRuns} />
                        <CustomInput placeholder="Country..." onChangeText={(cntry) => setCountry(cntry)} maxLength={12} value={player.country} />
                        <DropDown options={options} onSelect={(option) => handleSelect(option)} isOpen={isOpen} setIsOpen={setIsOpen} type={type} value={player.playerType} />
                        <CustomInput placeholder="No. of match played ..." onChangeText={(mno) => setmatchCount(mno)} maxLength={3} inputMode={'numeric'} value={player.playedCount} />
                        <View style={editPlayerStyles.btnContainer}>
                            <Pressable style={editPlayerStyles.saveBtnStyles}
                                onPress={() => {
                                    handleSavePlayer()
                                    setEditPlayerShown(false)
                                }}>
                                <Text>Save</Text>
                            </Pressable>
                            <Pressable style={editPlayerStyles.cancelBtnStyles}
                                onPress={() => setEditPlayerShown(false)}>
                                <Text>Cancel</Text>
                            </Pressable>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </Modal>

    )
}

export default EditPlayer