// where to define constants
// how to split in multiple files?

class Api {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL;
  }

  getUsers() {
    console.log(`getting users: ${this.baseUrl}/users`);
    return `getting users: ${this.baseUrl}/users`;
  }

  getUser(id) {
    console.log(`getting user: ${this.baseUrl}/users/${id}`);
    return `getting user: ${this.baseUrl}/users/${id}`;
  }
}

export default new Api();
