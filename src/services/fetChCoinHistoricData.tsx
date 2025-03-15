import { axiosInstance } from "../helper/axiosInstance";

export async function fetchCoinHistoricData(id: string, interval: string, days = 7, currency = "usd") {
    try {
        console.log(id)
        console.log(days)
        console.log(interval)
        console.log(currency)
        const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);


        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
        return error;
    }
}
