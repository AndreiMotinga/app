import axios from 'axios';

class Api {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  createUser(email, password, password_confirmation) {
    return axios.post(`${this.baseUrl}/auth`, {
      email,
      password,
      password_confirmation
    });
  }

  getUser(id) {
    console.log(`getting user: ${this.baseUrl}/users/${id}`);
    return `getting user: ${this.baseUrl}/users/${id}`;
  }
}

export default new Api();
