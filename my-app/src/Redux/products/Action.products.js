import axios from "axios";
import { FILTER_BY_COUNTRY, FILTER_BY_DATE, GET_PRODUCT_LIST, GET_SERACH_DATA,  } from "./Types.products";

const baseUrl = "https://mocki.io/v1/a41f3039-4c21-42bb-a886-d9a342a02ae9"



export const GetProductList = () => async (dispatch) => {
  try {
    let x = await axios.get(`${baseUrl}`);
    let list = x.data
    dispatch({ type: GET_PRODUCT_LIST, payload: list })
  } catch (err) {
    console.log(err);
  }
};


export const GetSerachData = (text) => async (dispatch) => {
  try {
    let x = await axios.get(`${baseUrl}`);
    let list = x.data
    dispatch({ type: GET_SERACH_DATA, payload: text,list })
  } catch (err) {
    console.log(err);
  }
};


export const FilterByDate = (date) => async (dispatch) => {
  try {
    let x = await axios.get(`${baseUrl}`);
    let list = x.data
    dispatch({ type: FILTER_BY_DATE, payload: date,list })
  } catch (err) {
    console.log(err);
  }
};


export const FilterByCountry = (country) => async (dispatch) => {
  try {
    let x = await axios.get(`${baseUrl}`);
    let list = x.data
    dispatch({ type: FILTER_BY_COUNTRY, payload: country,list })
  } catch (err) {
    console.log(err);
  }
};



