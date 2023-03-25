import React, { useContext, useState } from "react";
import { View, Modal, TextInput, Pressable, Text, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { TeamsContext } from "../../context/TeamsContext";
import { addPlayerStyles } from "../../styles/ModalStyles/AddPlayerStyles";
import { CustomInput } from "../CustomInput";
import { DropDown } from "../Dropdown";

const AddPlayer = ({ addPlayerShown, setAddPlayerShown, teamId }) => {
    const { teams, setTeams } = useContext(TeamsContext)
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [numRuns, setruns] = useState('')
    const [age, setage] = useState('')
    const [type, settype] = useState('')
    const [matchCount, setmatchCount] = useState('')
    const [Country, setCountry] = useState('')
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

    const handleAddPlayer = () => {

        const team = teams.filter((_team_) => _team_.id === teamId)[0];
        const players = team.players;

        let newId;
        if (players.length === 0) // if no players, first player id 1
            newId = 1;
        else {
            const maxIdObject = players.reduce(((accumulator, current) => accumulator.id > current.id ? accumulator : current), 0);
            newId = maxIdObject.id + 1
        }

        const newPlayer = {
            id: newId,
            fname,
            lname,
            numRuns,
            age,
            playerType: type,
            playedCount: matchCount,
            country: Country
        }

        team.players = [...players, newPlayer]

        const rest_teams = teams.filter((_team_) => _team_.id !== teamId)

        setTeams([...rest_teams, team])
    }

    return (
        <Modal
            transparent={true}
            visible={addPlayerShown}
            animationType={'slide'}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : 'height'}
            ><SafeAreaView>
                    <View style={addPlayerStyles.overlay}>
                        <ScrollView style={addPlayerStyles.mainContainer}
                            contentContainerStyle={{ alignItems: 'center' }}>
                            <Text>Player Details</Text>
                            <CustomInput placeholder="Enter First Name..." onChangeText={(fName) => setfname(fName)} maxLength={12} validation={() => isNameValid(fname)} />
                            <CustomInput placeholder="Enter Last Name..." onChangeText={(lName) => setlname(lName)} maxLength={12} validation={() => isNameValid(lname)} />
                            <CustomInput placeholder="Age..." onChangeText={(AGE) => setage(AGE)} maxLength={2} inputMode={'numeric'} />
                            <CustomInput placeholder="Runs" onChangeText={(_runs) => setruns(_runs)} maxLength={6} inputMode={'numeric'} />
                            <CustomInput placeholder="Country..." onChangeText={(cntry) => setCountry(cntry)} maxLength={12} />
                            <DropDown options={options} onSelect={(option) => handleSelect(option)} isOpen={isOpen} setIsOpen={setIsOpen} type={type} />
                            <CustomInput placeholder="No. of match played ..." onChangeText={(mno) => setmatchCount(mno)} maxLength={3} inputMode={'numeric'} />
                            <View style={addPlayerStyles.btnContainer}>
                                <Pressable style={addPlayerStyles.addBtnStyles}
                                    onPress={() => {
                                        handleAddPlayer()
                                        setAddPlayerShown(false)
                                    }}>
                                    <Text>Add Player</Text>
                                </Pressable>
                                <Pressable style={addPlayerStyles.cancelBtnStyles}
                                    onPress={() => setAddPlayerShown(false)}>
                                    <Text>Cancel</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </Modal>

    )
}

export default AddPlayer