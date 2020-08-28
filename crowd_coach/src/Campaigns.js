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
{/* 
            <div className='responnse container'>
                <h4>Results</h4>
                <p>Prediction': {result.prediction}</p>
                <p>Probability of Success: {result.probability_of_success}</p>
                <p>Monetary Feedback: {result.monetary_feedback}</p>
                <p>Title Feedback: {result.Title_feedback}</p>
                <p>Description Feedback: {result.description_feedback}</p>
                <p>Campaign Time Feedback: {result.campaign_time_feedback}</p>
                <p>Month Feedback: {result.month_feedback}</p>
            </div> */}
  );
}