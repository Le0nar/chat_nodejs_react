import axios from "axios";

export class Authentication {
  api = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:5000/`,
  });

  async login(email: string, password: string) {
    let isSuccessfully = false;
    try {
      const response = await this.api.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      isSuccessfully = true;
    } catch (error) {
      console.error(error.response?.data?.message);
    }
    return isSuccessfully;
  }

  async registration(email: string, password: string) {
    let isSuccessfully = false;
    try {
      const response = await this.api.post("/auth/registration", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      isSuccessfully = true;
    } catch (error) {
      console.error(error.response?.data?.message);
    }
    return isSuccessfully;
  }
}
