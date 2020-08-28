import React,{useState} from 'react'
import Form from './Form'

const EditCampaignPage = ({props, details}) => {

    const [] = useState()

    const editCampaign = ((id) => {
        axiosWithAuth()
          .put(`https://reqres.in/api/users`, campaignEdit)
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
        <Form />
    )
}


export default EditCampaignPage