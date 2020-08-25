import React from 'react'



export default function Form(props) {
    const {values,inputChange,submit} = props

    return(
        <section className="form">
            <div className="title">
                <h1 className="title">New Campaign</h1>
                <h3 className="subtitle">Enter The Campaign Info</h3>
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
                        id='monetarty_goal'
                        name='monetarty_goal'
                        value={values.monetarty_goal}
                        onChange={inputChange}
                        />
                    </label>

                    <label for="">Start Date
                        <input 
                        type="datetime-local"
                        id='launch_date'
                        name='launch_date'
                        value={values.launch_date}
                        onChange={inputChange}
                        />
                    </label>

                    <label for="">End Date
                        <input 
                        type="datetime-local"
                        id='finish_date'
                        name='finish_date'
                        value={values.finish_date}
                        onChange={inputChange}
                        />
                    </label>

                    <label for="">Category
                        <input 
                        type="text"
                        id='category'
                        name='category'
                        value={values.category}
                        onChange={inputChange}
                        />
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
                        />
                    </label>
                </form>
            </div>
        </section>
    )
}