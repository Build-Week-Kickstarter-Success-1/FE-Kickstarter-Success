import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from './Form'
import Header from './Header'
import Campaigns from './Campaigns'

const blankForm = {
    title:'',
    monetarty_goal:'',
    launch_date:'',
    finish_date:'',
    category:'',
    description:''
}

const initialCampaigns = []

function Campaign({ details }) {
    const [campaigns, setCampaigns] = useState(initialCampaigns)
    const [formValues,setFormValues] = useState(blankForm)


    const getCampaigns = (id) => {
        axios.get('https://be-lambda-kickstarter-success.herokuapp.com/api/campaigns/:id')
          .then(res => {
            setCampaigns(res.data)
          })
          .catch(err => {
            debugger
          })
      }
    

    const formChange = (evt) =>{

        const {name,value} = evt.target

        setFormValues({
            ...formValues,
            [name]:value
        })
    }

    const postCampaign = campaign => {

        axios.post('https://reqres.in/api/users', campaign)
          .then(res => {
            console.log(campaign)
        })
          .catch(err => {
            debugger
          })
          .finally(() => {
            setFormValues(blankForm)
          })
      }

      const onSubmit = (evt) =>{
          evt.preventDefault()
          submit()
      }

      const submit = () => {
        const newCampaign = {
          title:formValues.name.trim(),
          monetarty_goal: formValues.monetarty_goal.trim(),
          launch_date: formValues.launch_date.trim(),
          finish_date: formValues.finish_date.trim(),
          category: formValues.category.trim(),
          description: formValues.description.trim(),
        }
        postCampaign(newCampaign)
      }


  if (!details) {
    return <h3>Working fetching your campaign&apos;s details...</h3>
  }

  return (
    <div className='container'>

        <Form
            values={formValues}
            inputChange={formChange}
            submit={submit}
            // disabled={disabled}
            // errors={formErrors}
        />

        {
            campaigns.map(campaign => {
            return (
                <Campaigns key={campaign.id} details={campaign} />
            )
            })
        }

    </div>

    
    
  )
}

export default Campaign
