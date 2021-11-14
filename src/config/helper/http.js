import axios from "axios";

export const http = axios.create({
  timeout: 60000,
  withCredentials: false,
  headers: {},
});

http.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("TOKEN");
    if (token) request.headers.Authorization = `Bearer ${token}`;
    // console.log("token", token);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { data } = error.response;
      localStorage.clear();
      window.location = "/login";
      if (error.response.status === 401) {
        if (
          data.name === "NotAuthenticated" &&
          data.data &&
          data.data.name === "TokenExpiredError"
        ) {
          return Promise.reject({
            message: "Token expired. Please try login again.",
          });
        } else {
          return Promise.reject({
            message: "Login failed. Please check your email and password!",
          });
        }
      } else {
        let message = data.message || error.message;
        return Promise.reject({ message, raw: data });
      }
    } else if (error.request) {
      return Promise.reject({
        message:
          "There is problem connecting to server. Please check your connection!",
      });
    } else {
      return Promise.reject({ message: error.message });
    }
  }
);

export default http;
