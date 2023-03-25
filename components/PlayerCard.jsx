// jai Ganesh
import React, { useContext } from "react";
import DeletePlayer from "./Modals/DeletePlayer";
import { DeletePlayerContext } from "../context/DeletePlayerContext";
import { EditPlayerContext } from "../context/EditPlayerContext";
import { playerCardStyles } from "../styles/playerCardStyles";
import EditPlayer from "./Modals/EditPlayer";
import { Image, View, Text, Pressable } from 'react-native'
import batsMan from '../assets/banner.jpg'
const PlayerCard = ({ player }) => {
    const { deletePlayerShown, setDeletePlayerShown } = useContext(DeletePlayerContext)
    const { editPlayerShown, setEditPlayerShown } = useContext(EditPlayerContext)
    return (
        <Pressable
            onLongPress={() => setDeletePlayerShown(true)}
            style={playerCardStyles.cardContainer}>
            <View style={playerCardStyles.cardLeft}>
                <Image style={playerCardStyles.playerImgStyles} source={batsMan} />
            </View>
            <View style={playerCardStyles.cardRight}>
                <View style={playerCardStyles.teamNameContainer}>
                    <Text style={playerCardStyles.teamNameText}>{player.fname + " " + player.lname}</Text>
                </View>
                <View style={playerCardStyles.type_matchCountContainer}>
                    <Text style={playerCardStyles.playerTypeText}>{player.playerType}</Text>
                    <View style={playerCardStyles.matchCountContainer}>
                        <Text style={playerCardStyles.matchCountText}>Match Count</Text>
                        <Text style={playerCardStyles.matchCountValue}> : {player.playedCount}</Text>
                    </View>
                    <View style={playerCardStyles.matchCountContainer}>
                        <Text style={playerCardStyles.matchCountText}>Age</Text>
                        <Text style={playerCardStyles.matchCountValue}> : {player.age}</Text>
                    </View>

                </View>
                <Pressable onPress={() => setEditPlayerShown(true)}
                    style={playerCardStyles.editBtn}>
                    <Text style={playerCardStyles.editBtnText}>EDIT</Text>
                </Pressable>
            </View>
            <DeletePlayer id={player.id} />
            <EditPlayer playerId={player.id} />
        </Pressable>
    )
}

export default PlayerCard
