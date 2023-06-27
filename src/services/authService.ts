import axios from 'axios';

export const loginUser = (username: string, password: string) =>
  axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      username,
      password,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
