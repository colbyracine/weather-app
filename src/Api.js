import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = "b9381fd11d474df2997142847230804";

export const getWeatherData = async (zipCode, dataType) => {
  const url = `${BASE_URL}/${dataType}.json?key=${API_KEY}&q=${zipCode}&aqi=no&`;
  const response = await axios.get(url);
  return response.data;
};
