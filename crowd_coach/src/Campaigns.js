import React from 'react'


export default function Capmaigns({details}){
    if (!details) {
        return <h3>Working fetching your detail&apos;s details...</h3>
      }



    return(
        <div className='campaign container'>
            <h4>{details.title}</h4>
            <p>Goal: {details.goal}</p>
            <p>Start Date: {details.startDate}</p>
            <p>End Date: {details.endDate}</p>
            <p>Category: {details.category}</p>
            <p>Description: {details.description}</p>
            <p>Result: {details.review}</p>
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


            <button>Edit</button>
            <button>Delete</button>
        
        </div>
    )
}