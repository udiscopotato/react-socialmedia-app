// let BASE_URL = "https://post-it-heroku.herokuapp.com/";
// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   BASE_URL = "http://localhost:4000/";
// process.env.BASE_URL
// }

const BASE_URL = process.env.REACT_APP_BASE_URL;

export { BASE_URL };
