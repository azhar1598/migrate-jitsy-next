import React, { useState, createContext } from "react";

export const MeetContext = createContext();
export const MNameContext = createContext();

export const MeetProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [mName, setMName] = useState("");

  return (
    <MeetContext.Provider value={[name, setName]}>
      <MNameContext.Provider value={[mName, setMName]}>
        {children}
      </MNameContext.Provider>
    </MeetContext.Provider>
  );
};
