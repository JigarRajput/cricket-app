import { createContext } from "react";
import React, { useState } from "react";

export const DeletePlayerContext = createContext();

export const DeletePlayerProvider = ({ children }) => {
    const [deletePlayerShown, setDeletePlayerShown] = useState(false)

    return (
        <DeletePlayerContext.Provider value={{ deletePlayerShown, setDeletePlayerShown }}>
            {children}
        </DeletePlayerContext.Provider>
    )
}

export default DeletePlayerProvider;