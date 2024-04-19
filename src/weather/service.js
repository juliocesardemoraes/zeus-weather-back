const requestOptions = {
  method: "GET",
  redirect: "follow",
};

export const getWeather = async (cityName) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.TOKEN}&q=${cityName}&lang=pt`,
    requestOptions
  );

  const data = await response.json();
  return data;
};
