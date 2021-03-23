import client from "./client";

const endPoint = "/67bfbbfbb3c326d8f8bc";
const getListings = () => client.get(endPoint);

export default {
  getListings,
};
