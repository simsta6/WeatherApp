const appKey = "4fd70f7b0e36aefec5aa0b8ed2aa9ba2";
const lat = "55.194";
const lan = "24.428";
const cnt = "20";
const units = "metric";

export function fetchCityTemp() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lan}&cnt=${cnt}&appid=${appKey}&units=${units}`
  );
}

export function fetchCityInfoByID(id) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${appKey}&units=${units}`
  );
}
