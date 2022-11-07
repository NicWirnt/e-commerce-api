import axios from "axios";

// this file is like your model file

export const getCustomer = (id) => {
  const customerUrl = id
    ? "https://jsonplaceholder.typicode.com/users/" + id
    : "https://jsonplaceholder.typicode.com/users/";

  return axios.get(customerUrl);
};
