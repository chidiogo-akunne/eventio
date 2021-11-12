import axios from "./axiosInstance";

//create get functions using axios

export async function fetchEvents() {
  const { data } = await axios.get(`/events`);
  return data;
}
