import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

export async function fetchPosts() {
  const { data } = await axios.get(`${baseURL}/events`, {
    headers: {
      "Content-Type": "application/json",
      APIKey: `${process.env.REACT_APP_API_KEY}`,
    },
  });
  return data;
}
