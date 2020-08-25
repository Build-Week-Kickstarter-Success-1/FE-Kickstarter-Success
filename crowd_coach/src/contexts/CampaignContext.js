import React, { useState, createContext } from 'react';

export const CampaignContext = createContext();

export const CampaignProvider = ({ children }) => {
  const [campaigns, setCampaigns] = useState([
    {
      title: 'Test',
      monetary_goal: 200,
      launch_date: '08/25/2020',
      finish_date: '09/14/2020',
      category: 'testing',
      description: 'test description',
      review: '5'
    }
  ]);

  return (
    <CampaignContext.Provider value={[campaigns, setCampaigns]}>
      {children}
    </CampaignContext.Provider>
  );
};
