import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.npoint.io",
});

export default apiClient;
