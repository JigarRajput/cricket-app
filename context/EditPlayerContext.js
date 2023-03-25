import { createContext } from "react";
import React, { useState } from "react";

export const EditPlayerContext = createContext();

export const EditPlayerProvider = ({ children }) => {
    const [editPlayerShown, setEditPlayerShown] = useState(false)

    return (
        <EditPlayerContext.Provider value={{ editPlayerShown, setEditPlayerShown }}>
            {children}
        </EditPlayerContext.Provider>
    )
}

export default EditPlayerProvider;