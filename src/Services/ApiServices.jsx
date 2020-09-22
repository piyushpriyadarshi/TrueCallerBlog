import axios from 'axios';

const URL = 'https://public-api.wordpress.com/rest/v1/sites/107403796/';
export const getAllPosts = () => {
  return axios.get(URL + 'posts/');
};

export const getAllCategories = () => {
  return axios.get(URL + 'categories/');
};
