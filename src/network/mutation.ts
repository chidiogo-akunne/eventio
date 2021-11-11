import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
const userAccessToken = "UsersAccessToken";

export async function createUser() {
  const response = await axios.post(`${baseURL}/users`, {
    headers: {
      "Content-Type": "application/json",
      APIKey: `${process.env.REACT_APP_API_KEY}`,
    },
  });
  return response;
}

export async function loginUser() {
  const response = await axios.post(`${baseURL}/auth/native`, {
    headers: {
      "Content-Type": "application/json",
      APIKey: `${process.env.REACT_APP_API_KEY}`,
    },
  });
  return response;
}

export async function refreshToken() {
  const response = await axios.post(`${baseURL}/auth/native`, {
    headers: {
      "Content-Type": "application/json",
      APIKey: `${process.env.REACT_APP_API_KEY}`,
    },
  });
  return response;
}

export async function createEvent() {
  const response = await axios.post(`${baseURL}/events`, {
    headers: {
      "Content-Type": "application/json",
      APIKey: `${process.env.REACT_APP_API_KEY}`,
      Authorization: userAccessToken,
    },
  });
  return response;
}
