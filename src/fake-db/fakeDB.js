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
      review: "Very good quality",
      reviewedBy: "Nico",
      reviewdBy_Id: "1123534234234asdg1df",
    },
    {
      _id: "2",
      productId: "6301ed5f102b80ac7b3825d6",
      productName: "nerfGun 002",
      rating: 3,
      review: "Just a normal toy",
      reviewedBy: "Han",
      reviewdBy_Id: "12387basdb2388123b",
    },
    {
      _id: "1",
      productId: "63609df5e88e4a049c9cd5e4",
      productName: "Air Soft Gun",
      review: "good",
      rating: 4,
      reviewedBy: "Sam",
      reviewdBy_Id: "01932kmk1n8283283",
    },
  ];
  return rating;
};

export const createOrders = () => {
  const orders = [
    {
      _id: "1",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "2",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "3",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "4",
      status: "shipped", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "5",
      status: "cancelled", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "1",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "2",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "3",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "4",
      status: "shipped", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "5",
      status: "cancelled", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "1",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "2",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "3",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "4",
      status: "shipped", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "5",
      status: "cancelled", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "1",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "2",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "3",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "4",
      status: "shipped", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "5",
      status: "cancelled", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "1",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "2",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "3",
      status: "processing", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
        address: "abcabc",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "4",
      status: "shipped", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
    {
      _id: "5",
      status: "cancelled", // processing, complete, cancelled
      buyer: {
        buyerId: "23423432", // _id of the user
        fName: "Nico",
        lName: "wira",
        email: "nicowraianta@gmail.com",
        phone: "123132123123",
      },
      cart: [
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asdfkjksdfj32",
          productName: "Small gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
        {
          productId: "asd92341kd",
          productName: "Nerf Gun",
          salePrice: "50",
          qty: 4,
          thumbnail: "http://",
          subTotal: 200,
        },
      ],
      cartTotal: "200",
      discount: "50",
      discountCode: "hahsdf",
      totalAmount: "100",
      paymentInfo: {
        status: "paid", // pending or paid
        method: "cash on pickup", //credic card, debit, etc
        paidAmount: "2302",
        transactionId: "ja81324jkh",
        paidDate: "11/11/2022",
      },
    },
  ];
  return orders;
};
