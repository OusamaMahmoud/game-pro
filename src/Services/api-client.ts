import axios, { AxiosRequestConfig } from "axios";

export interface FeatchResponse<T> {
  count: number;
  next?: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1f00dfb782f44e1394d0f1856da3901c",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getQuery = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FeatchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
export default APIClient;
 