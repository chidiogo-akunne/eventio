import axios from "./axiosInstance";

export async function fetchEvents() {
  const { data } = await axios.get(`/events`);
  return data;
}
