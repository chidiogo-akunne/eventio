import axios from "./axiosInstance";

export async function createUser(payload: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) {
  const response = await axios.post(`/users`, payload);
  return response;
}

export async function loginUser(payload: { email: string; password: string }) {
  const response = await axios.post(`/auth/native`, payload);
  return response;
}

export async function refreshToken(refreshToken: string) {
  const response = await axios.post(`/auth/native`, refreshToken);
  return response;
}

export async function createEvent(payload: {
  title: string;
  description: string;
  capacity: string;
  startsAt: string;
}) {
  const response = await axios.post(`/events`, payload);
  return response;
}

export async function attendEvent(eventId: string) {
  return axios.post(`/events/${eventId}/attendees/me`);
}

export async function unattendEvent(eventId: string) {
  return axios.delete(`/events/${eventId}/attendees/me`);
}
