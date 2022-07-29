import request from "./request";

export const getColor = async (result) => {
  const response = await request.get("Color", result);
  return response.data;
};

/*
export const postColor = async (result) => {
  return request.post("");
};
*/
