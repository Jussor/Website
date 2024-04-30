export const apiBaseUrl = "https://jussor-server.onrender.com"
import axios from "axios";
// export const IMAGE_PATH ="https://res.cloudinary.com/dx3oigwug/image/upload/v1691515895/";
const BASE_URL = "https://jussor-server.onrender.com";
export const IMAGE_PATH = "https://res.cloudinary.com/dx3oigwug/image/upload/v1691515895/";
export const VIDEO_PATH ="https://res.cloudinary.com/dx3oigwug/video/upload/v1714111472/"



export const apiRequest = async (method, route, body) => {
  try {
    const response = await axios({
      method: method,
      url: `${apiBaseUrl}/${route}`,
      data: body,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};