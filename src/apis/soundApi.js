import request from "./request";

export const getSound = async (result) => {
  const response = await request.get("Music", result);
  return response.data;
};
