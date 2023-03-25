import React, { useContext } from "react";
import { FlatList } from "react-native";
import PlayerCard from "./PlayerCard";
export const PlayersList = ({ players }) => {
    console.log(players, "from players list")
    return (
        <FlatList
            data={players}
            renderItem={({ item }) => <PlayerCard player={item} key={item.id} />}
        />
    )
}