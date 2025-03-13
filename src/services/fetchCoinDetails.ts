import { axiosInstance } from "../helper/axiosInstance";

export async function fetchCoinDetails(id: string) {
  try {
    const response = await axiosInstance.get(`/coins/${id}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
