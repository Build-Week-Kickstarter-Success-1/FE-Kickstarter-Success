import React from 'react'



export default function Form(props) {
    const {values,inputChange,submit,disabled,errors} = props

    return(
        <section className="form">
            <div className="title">
                <h1 className="title">New Campaign</h1>
                <h3 className="subtitle">Enter The Campaign Info</h3>

                <div className='errors'>
                    <div>{errors.title}</div>
                    <div>{errors.monetary_goal}</div>
                    <div>{errors.launch_date}</div>
                    <div>{errors.finish_date}</div>
                    <div>{errors.category}</div>
                    <div>{errors.description}</div>
                </div>
            </div>
            <div className="form">
                <form action=""
                onSubmit={submit}>
                    <label for="">Campaign Titile
                        <input 
                        type="text"
                        id='title'
                        name='title'
                        value={values.title}
                        onChange={inputChange}
                        />
                    </label>
                    <label for="">Campaign Goal
                        <input 
                        type="number"
                        id='monetary_goal'
                        name='monetary_goal'
                        value={values.monetary_goal}
                        onChange={inputChange}
                        />
                    </label>

                    <label for="">Start Date
                        <input 
                        type="date"
                        id='launch_date'
                        name='launch_date'
                        value={values.launch_date}
                        onChange={inputChange}
                        />
                    </label>

                    <label for="">End Date
                        <input 
                        type="date"
                        id='finish_date'
                        name='finish_date'
                        value={values.finish_date}
                        onChange={inputChange}
                        />
                    </label>

                    <label for="">Category
                        <select 
                        id='category'
                        name='category'
                        value={values.category}
                        onChange={inputChange}
                        >
                            <option value=''>Select a Category</option>
                            <option value='Hardware'>Hardware</option>
                            <option value='Plays'>Plays</option>
                            <option value='Gadgets'>Gadgets</option>
                            <option value='Musical'>Musical</option>
                            <option value='Software'>Software</option>
                            <option value='Festivals'>Festivals</option>
                            <option value='Apps'>Apps</option>
                            <option value='Wearables'>Wearables</option>
                            <option value='Web'>Web</option>
                            <option value='Sound'>Sound</option>
                            <option value='Robots'>Robots</option>
                            <option value='Experimental'>Experimental</option>
                            <option value='Other'>Other</option>
                        </select>
                    </label>
                    <label for="">Description
                        <input 
                        type="text"
                        id='description'
                        name='description'
                        value={values.description}
                        onChange={inputChange}
                        />
                    </label>

                    <label className='submit'>
                        <input
                        onClick={submit}
                        type='submit'
                        id='submitBtn'
                        name='submitBtn'
                        value='Submit Campaign'
                        disabled={disabled}
                        />
                    </label>
                </form>
            </div>
        </section>
    )
}