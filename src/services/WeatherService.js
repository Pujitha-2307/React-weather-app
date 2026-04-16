import axios from "axios";

const API_KEY = "ef01e9a99c796271bcdd047224d42dbb";

export const getWeather = async (city) => {
  const res = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );
  return res.data;
};