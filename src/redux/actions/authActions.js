import axios from 'axios';
import { toast } from 'react-toastify';
import { URLDevelopment } from '../helpers/URL';
import { REGISTER_FAIL, REGISTER_SUCCESS } from '../types';

export const register = ( name, email, password ) => async (dispatch) => {
  // Headers for axios
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
  }

  const body = JSON.stringify({ name, email, password });

  try {
    // Response
    const res = await axios.post(`${URLDevelopment}/api/user/register`, body, config)  //Put API here
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: REGISTER_FAIL,
    })
  }
}