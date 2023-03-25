import PlayerContext from "./PlayerContext";
import React, { useState } from "react";

let _players = [
    {
        id: 1,
        fname: "Jigar",
        lname: "rajput",
        age: 21,
        playerType: "Batter",
        playedCount: 100,
        numRuns: 5000,
        country: 'India'
    }
]


export const PlayerProvider = ({ children }) => {
    const [players, setPlayers] = useState([])

    return (
        <PlayerContext.Provider value={{ players, setPlayers }}>
            {children}
        </PlayerContext.Provider>
    )
}