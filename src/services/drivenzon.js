import axios from "axios";

const URL = 'https://back-projeto14-drivenzon.herokuapp.com';

function register(body) {
  return axios.post(`${URL}/register`, body);
}

function login(body) {
  return axios.post(`${URL}/login`, body);
}

function logout(config) {
  return axios.delete(`${URL}/logout`, {}, config);
}

function getCart(config) {
  return axios.get(`${URL}/cart`, {}, config);
}

function deleteFromCart(body, config) {
  return axios.delete(`${URL}/cart`, body, config);
}

export { register, login, logout, getCart, deleteFromCart };