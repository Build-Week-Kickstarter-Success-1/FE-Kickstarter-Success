import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'https://be-lambda-kickstarter-success.herokuapp.com',
    headers: {
      Authorization: token
    }
  })
}

//this file is setup perfectly. no changes to code its self i would have done it this way as well. 