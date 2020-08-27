import React, { useState, useEffect, useContext } from 'react'
import {axiosWithAuth} from './utils/axiosWithAuth'
import Form from './Form'
import Campaigns from './Campaigns'
import { CampaignContext } from './contexts/CampaignContext'
import jwt_decode from 'jwt-decode'

const token = localStorage.getItem('token')
const userId = token ? jwt_decode(token).subject : null

const blankForm = {
  user_id: userId,
  title: '',
  monetary_goal: '',
  launch_date: '',
  finish_date: '',
  category: '',
  description: ''
}



function Dashboard() {
  const [campaigns, setCampaigns] = useContext(CampaignContext);
  const [formValues, setFormValues] = useState(blankForm);
  const [edit, setEdit] = useState(blankForm)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    getCampaigns();
  }, [])

  const getCampaigns = (id) => {
    axiosWithAuth()
      .get(
        `/api/campaigns/`
      )
      .then((res) => {
        setCampaigns(res.data['data']);
      })
      .catch((err) => {
        debugger;
      });
  };

  const formChange = (evt) => {
    const { name, value } = evt.target;
    editing ? setEdit({
      ...edit,
      [name]: value
    }): 
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const postCampaign = (campaign) => {
    axiosWithAuth()
      .post('/api/campaigns', campaign)
      .then((res) => {
        console.log(campaign);
        setCampaigns([...campaigns, formValues]);
      })
      .catch((err) => {
        debugger;
      })
      .finally(() => {
        setFormValues(blankForm);
      });
  };

  const editCampaign = (campaign) => {
    setEditing(true)
    setEdit(campaign)
  }

  const saveEdit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .put(`/api/campaigns/${edit.id}`, edit)
    .then((res) => {
      setCampaigns(campaigns.map(campaign => {
        if(campaign.id === res.data['data'].id){
          return(res.data['data'])
        }
        else{
          return campaign
        }
      }))
    })
  }

  const deleteCampaign = (notCampaigns) => {
    console.log(campaigns)
    axiosWithAuth()
        .delete(`/api/campaigns/${notCampaigns.id}`)
        .then((res) => {
          setCampaigns(campaigns.filter((item) => 
            notCampaigns.id !== item.id
            ))
        })
        .catch((err) => console.log(err));
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const submit = () => {
    const newCampaign = {
      user_id: userId,
      title: formValues.title.trim(),
      monetary_goal: formValues.monetary_goal.trim(),
      launch_date: formValues.launch_date.trim(),
      finish_date: formValues.finish_date.trim(),
      category: formValues.category.trim(),
      description: formValues.description.trim()
    };
    postCampaign(newCampaign);
  };

  return (
    <div className='container'>
      <Form
        edit={edit}
        editing={editing}
        saveEdit={saveEdit}
        values={formValues}
        inputChange={formChange}
        submit={onSubmit}
        // disabled={disabled}
        // errors={formErrors}
      />

      <div className='campaigns'>
        <h2>Your Campaigns</h2>
        {campaigns.map((campaign) => {
          return <Campaigns key={campaign.id} details={campaign} editCampaign={editCampaign} deleteCampaign={deleteCampaign}/>;
        })}
      </div>
    </div>
  );
}


export default Dashboard