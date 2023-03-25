import { createContext } from "react";
import React, { useState } from "react";

export const TeamsContext = createContext();

export const TeamsProvider = ({ children }) => {

    const demoTeam = {
        id: 1,
        team_name: 'CSK',
        players: []
    }

    const [teams, setTeams] = useState([])

    return (
        <TeamsContext.Provider value={{ teams, setTeams }}>
            {children}
        </TeamsContext.Provider>
    )
}

export default TeamsProvider;