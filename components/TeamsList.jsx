import React, { useContext } from "react";
import { FlatList } from "react-native";
import TeamCard from "./TeamCard";
import { TeamsContext } from "../context/TeamsContext";
import TeamProvider from "../context/TeamContext";

export const TeamsList = () => {

    const { teams, setTeams } = useContext(TeamsContext)
    console.log(teams)
    return (
        <TeamProvider>
            <FlatList
                data={teams}
                renderItem={({ item }) => <TeamCard team={item} />}
            />
        </TeamProvider>
    )
}