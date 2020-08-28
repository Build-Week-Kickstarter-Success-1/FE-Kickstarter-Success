import React, { useState, createContext } from 'react';

export const CampaignContext = createContext()

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([])

  return (
    <CampaignContext.Provider value={[campaigns, setCampaigns]}>
      {children}
    </CampaignContext.Provider>
  )
}

//decided to use context before i joined back to the project but for the little amount of state i agree with the decision