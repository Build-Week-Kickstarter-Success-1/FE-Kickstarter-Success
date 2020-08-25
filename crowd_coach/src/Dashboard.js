import React, {useState, useEffect} from 'react'
import axios from 'axios'

const blankForm = {
    goal:'',
    length:'',
    category:'',
    description:''
}


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
          goal: formValues.goal.trim(),
          length: formValues.length.trim(),
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
                <form action="">
                    <label for="">Campaign Goal
                        <input 
                        type="number"
                        id='goal'
                        name='goal'
                        value={formValues.goal}
                        onChange={formChange}
                        />
                    </label>
                    <label for="">Campaign Length
                        <input 
                        type="text"
                        id='length'
                        name='length'
                        value={formValues.length}
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