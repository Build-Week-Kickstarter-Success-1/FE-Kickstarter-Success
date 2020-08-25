import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Form from './Form';
import Campaigns from './Campaigns';
import { CampaignContext } from './contexts/CampaignContext';

const blankForm = {
  title: '',
  monetary_goal: '',
  launch_date: '',
  finish_date: '',
  category: '',
  description: ''
};

const userId = '';

function Dashboard() {
  const [campaigns, setCampaigns] = useContext(CampaignContext);
  const [formValues, setFormValues] = useState(blankForm);

  // const getCampaigns = (id) => {
  //   axios
  //     .get(
  //       `https://be-lambda-kickstarter-success.herokuapp.com/api/campaigns/${id}`
  //     )
  //     .then((res) => {
  //       setCampaigns(res.data);
  //     })
  //     .catch((err) => {
  //       debugger;
  //     });
  // };

  const formChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const postCampaign = (campaign) => {
    axios
      .post('https://reqres.in/api/users', campaign)
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
      title: formValues.title.trim(),
      monetary_goal: formValues.monetary_goal.trim(),
      launch_date: formValues.launch_date.trim(),
      finish_date: formValues.finish_date.trim(),
      category: formValues.category.trim(),
      description: formValues.description.trim()
    };
    postCampaign(newCampaign);
  };

  // useEffect(() => {
  //   getCampaigns(userId);
  // }, []);

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
          return <Campaigns key={campaign.id} details={campaign} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
