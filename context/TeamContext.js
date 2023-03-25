import { createContext } from "react";
import React, { useState } from "react";

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    const [teamId, setTeamId] = useState(0)

    return (
        <TeamContext.Provider value={{ teamId, setTeamId }}>
            {children}
        </TeamContext.Provider>
    )
}

export default TeamProvider;