import React, {useState, useEffect} from 'react'
import axios from 'axios'

// const blankForm = {
//     title:'',
//     monetarty_goal:'',
//     launch_date:'',
//     finish_date:'',
//     category:'',
//     description:''
// }


export default function Dashboard() {
    const [formValues,setFormValues] = useState(blankForm)

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



    return(
        <section className="form">
            <div className="title">
                <h1 className="title">New Campaign</h1>
                <h3 className="subtitle">Enter The Campaign Info</h3>
            </div>
            <div className="form">
                <form action=""
                onSubmit={onSubmit}>
                    <label for="">Campaign Titile
                        <input 
                        type="text"
                        id='title'
                        name='title'
                        value={formValues.title}
                        onChange={formChange}
                        />
                    </label>
                    <label for="">Campaign Goal
                        <input 
                        type="number"
                        id='monetarty_goal'
                        name='monetarty_goal'
                        value={formValues.monetarty_goal}
                        onChange={formChange}
                        />
                    </label>

                    <label for="">Start Date
                        <input 
                        type="datetime-local"
                        id='launch_date'
                        name='launch_date'
                        value={formValues.launch_date}
                        onChange={formChange}
                        />
                    </label>

                    <label for="">End Date
                        <input 
                        type="datetime-local"
                        id='finish_date'
                        name='finish_date'
                        value={formValues.finish_date}
                        onChange={formChange}
                        />
                    </label>

                    <label for="">Category
                        <input 
                        type="text"
                        id='category'
                        name='category'
                        value={formValues.category}
                        onChange={formChange}
                        />
                    </label>
                    <label for="">Description
                        <input 
                        type="text"
                        id='description'
                        name='description'
                        value={formValues.description}
                        onChange={formChange}
                        />
                    </label>

                    <label className='submit'>
                        <input
                        onClick={submit}
                        type='submit'
                        id='submitBtn'
                        name='submitBtn'
                        value='Submit Campaign'
                        />
                    </label>
                </form>
            </div>
        </section>
    )
}