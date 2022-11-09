import axios from "axios";

// this file is like your model file

export const getCustomer = (id) => {
  const customerUrl = id
    ? "https://jsonplaceholder.typicode.com/users/" + id
    : "https://jsonplaceholder.typicode.com/users/";

  return axios.get(customerUrl);
};

export const getRating = () => {
  const rating = [
    {
      _id: "1",
      productId: "6301ed40102b80ac7b3825d3",
      productName: "nerfGun 002",
      rating: 5,
      reviewedBy: "Nico",
      reviewdBy_Id: "1123534234234asdg1df",
    },
    {
      _id: "2",
      productId: "6301ed5f102b80ac7b3825d6",
      productName: "nerfGun 002",
      rating: 3,
      reviewedBy: "Han",
      reviewdBy_Id: "12387basdb2388123b",
    },
    {
      _id: "1",
      productId: "63609df5e88e4a049c9cd5e4",
      productName: "Air Soft Gun",
      rating: 4,
      reviewedBy: "Sam",
      reviewdBy_Id: "01932kmk1n8283283",
    },
  ];
  return rating;
};
