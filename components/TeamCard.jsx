// jai Ganesh
import React, { useContext, useState } from "react";
import TeamPlayers from "./Modals/TeamPlayers";
import { teamCardStyles } from "../styles/TeamCardStyles";
import EditTeam from "./Modals/EditTeam";
import { Image, View, Text, Pressable } from 'react-native'
import batsMan from '../assets/banner.jpg'
import PlayerContext from "../context/players/PlayerContext";
import { TeamContext } from "../context/TeamContext";
const TeamCard = ({ team }) => {
    const { teamId, setTeamId } = useContext(TeamContext)
    const [editShown, setEditShown] = useState(false)
    const [deleteShown, setDeleteShown] = useState(false)
    const [playersVisible, setPlayersVisible] = useState(false)

    const handleShowPlayers = () => {
        setTeamId(team.id)
        setPlayersVisible(true)
    }

    return (
        <Pressable
            onLongPress={() => setDeleteShown(true)}
            style={teamCardStyles.cardContainer}>
            <View style={teamCardStyles.cardLeft}>
                <Image style={teamCardStyles.playerImgStyles} source={batsMan} />
            </View>
            <View style={teamCardStyles.cardRight}>
                <View style={teamCardStyles.teamNameContainer}>
                    <Text style={teamCardStyles.teamNameText}>{team.team_name}</Text>
                </View>
                <View style={teamCardStyles.playerCountContainer}>
                    <Text style={teamCardStyles.playerCountText}>Player Count</Text>
                    <Text style={teamCardStyles.playerCountValue}> : {team.players.length}</Text>
                </View>
                <View style={teamCardStyles.buttonsContainer}>
                    <Pressable onPress={() => setEditShown(true)}
                        style={teamCardStyles.editBtn}>
                        <Text style={teamCardStyles.editBtnText}>EDIT</Text>
                    </Pressable>
                    <Pressable onPress={handleShowPlayers}
                        style={teamCardStyles.playersBtn}>
                        <Text style={teamCardStyles.playersBtnText}>PLAYERS</Text>
                    </Pressable>
                </View>
            </View>
            <EditTeam editShown={editShown} setEditShown={setEditShown} id={team.id} />
            <TeamPlayers id={team.id} visible={playersVisible} setVisible={setPlayersVisible} />
            {/* <DeletePlayer id={player.id} />
                <EditPlayer playerId={player.id} /> */}
        </Pressable>
    )
}

export default TeamCard
