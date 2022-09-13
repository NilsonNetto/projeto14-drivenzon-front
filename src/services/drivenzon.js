import axios from "axios";

const URL = 'https://localhost:5000';

function register(body) {
  return axios.post(`${URL}/register`, body);
}

function login(body) {
  return axios.post(`${URL}/login`, body);
}

export { register, login };