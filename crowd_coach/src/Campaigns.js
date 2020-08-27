import React, {useState} from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

export default function Capmaigns({ details }) {

  const [edits, setEdits] = useState()

  const [campaignEdit, setCampaignEdit] = useState({
    goal: '',
    startDate: '',
    endDate: '',
    category: '',
    description: '',
    result: ''
  })

  if (!details) {
    return <h3>Working fetching your detail&apos;s details...</h3>;
  }


  const editCampaign = ((id) => {
    axiosWithAuth()
      .put(`api/campaigns/${id}`, campaignEdit)
      .then(res => {
        console.log('from axios put', res.data)
        setCampaignEdit(res.data)
      })
      .catch(err => {
        console.log('error from axios put campaign.js', err.data)
      })
  },[])

  const handleChange = (e) => {
    setCampaignEdit({...campaignEdit, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e, id) => {
    e.preventDefault()
    axiosWithAuth()
    .post(`api/campaigns/${id}`,)
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
      <button onClick={editCampaign}>edit</button>
      {/* <button onClick={deleteCampaign}>delete</button> */}


      <h4>Edit your campaign here!</h4>
      <form onSubmit={handleSubmit}>
        <input type='text' value={campaignEdit.goal} name='goal' placeholder='goal' onChange={handleChange}/>
        <input type='date' id='launch_date' name='launch_date' value={campaignEdit.startDate} onChange={handleChange}/>
        <input type='date' id='finish_date' name='finish_date' value={campaignEdit.endDate} onChange={handleChange}/>
        <input type='text' value={campaignEdit.category}  placeholder='category' name='category' onChange={handleChange}/>
        <input type='text' value={campaignEdit.description}  placeholder='description' name='description' onChange={handleChange}/>
        <input type='text' value={campaignEdit.result}  placeholder='result' name='result' onChange={handleChange}/>
      </form>
    </div>
  );
}
