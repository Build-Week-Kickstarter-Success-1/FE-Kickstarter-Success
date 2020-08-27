import React, {useState} from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';



export default function Capmaigns({ details, editCampaign, deleteCampaign }) {


  if (!details) {
    return <h3>Working fetching your detail&apos;s details...</h3>;
  }


  return (
    <div className='campaign container'>
      <h4>{details.title}</h4>
      <p>Goal: {details.monetary_goal}</p>
      <p>Start Date: {details.launch_date}</p>
      <p>End Date: {details.finish_date}</p>
      <p>Category: {details.category}</p>
      <p>Description: {details.description}</p>
      <p>Result: {details.review}</p>
      
      <button onClick={() => editCampaign(details)}>edit</button>
      <button onClick={() => deleteCampaign(details)}>delete</button>

    </div>
  );
}