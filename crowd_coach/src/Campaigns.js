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
        
        </div>
    )
}