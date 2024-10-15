import Axios from "axios";
// import React,  {useState} from "react";

const fetchData = () => {
  return Axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
};

export default fetchData;