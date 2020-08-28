import React, {useState} from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';
import Form from './Form' 
export default function Capmaigns({ details, inputChange }) {

  // const [edits, setEdits] = useState()

  const [campaignEdit, setCampaignEdit] = useState({
    title: '',
    monetary_goal: '',
    launch_date: '',
    finish_date: '',
    category: '',
    description: ''
  })

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
      
      {/* <button onClick={deleteCampaign}>delete</button> */}


      <h4>Edit your campaign here!</h4>
      <button>edit</button>
      <button>delete</button>

    </div>
  );
}





{/* <form onSubmit={handleSubmit}>
<input type='text' value={campaignEdit.goal} name='goal' placeholder='goal' onChange={handleChange}/>
<input type='date' id='launch_date' name='launch_date' value={campaignEdit.startDate} onChange={inputChange}/>
<input type='date' id='finish_date' name='finish_date' value={campaignEdit.endDate} onChange={handleChange}/>
<input type='text' value={campaignEdit.category}  placeholder='category' name='category' onChange={handleChange}/>
<input type='text' value={campaignEdit.description}  placeholder='description' name='description' onChange={handleChange}/>
<input type='text' value={campaignEdit.result}  placeholder='result' name='result' onChange={handleChange}/>
</form> */}
