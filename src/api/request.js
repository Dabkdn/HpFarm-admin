import axios from "axios";
// import { _store } from 'index'

// const token = _store.getState().authentication

// const instance = axios.create({
//   baseURL: 'http://localhost:9000',
//   timeout: 20000,
//   headers: {
//     'content-type': 'application/json',
//     'authorization': authenticationInfo && authenticationInfo.token
//   },
// });


const request = (options) => {
  const authenticationInfo = JSON.parse(localStorage.getItem('authenticationInfo'))
  // modify headers
  // instance.defaults.headers.common['Authorization'] = "";
  return axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    timeout: 20000,
    headers: {
      'content-type': 'application/json',
      'authorization': authenticationInfo && authenticationInfo.token
    },
  });
}

/**
 * How to use request
 * EX: 
 * - POST /login
 * request().post("/login", {username: "abc", password: "123"})
 * 
 * - GET /auth
 * request().get("/auth")
 * 
 */

export default request;
