import React, { useState, useEffect, useContext } from 'react'
import {axiosWithAuth} from './utils/axiosWithAuth'
import Form from './Form'
import Campaigns from './Campaigns'
import { CampaignContext } from './contexts/CampaignContext'
import jwt_decode from 'jwt-decode'

const token = localStorage.getItem('token')
const userId = jwt_decode(token).subject

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

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <div className='container'>
      <Form
        values={formValues}
        inputChange={formChange}
        submit={onSubmit}
        // disabled={disabled}
        // errors={formErrors}
      />

      <div className='campaigns'>
        <h2>Your Campaigns</h2>
        {campaigns.map((campaign) => {
          return <Campaigns key={campaign.id} details={campaign} inputChange={formChange} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
