import axios from 'axios';

export class Http {
  static async getWithoutClient<T>(url: string) {
    return axios.get<T>(url);
  }
}
