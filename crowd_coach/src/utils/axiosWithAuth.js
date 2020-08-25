import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://be-lambda-kickstarter-success.herokuapp.com',
    headers: {
      Authorization: token
    }
  });
};
