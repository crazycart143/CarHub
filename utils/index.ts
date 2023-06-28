export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "d218346fa9msh2023ede40393546p11636ejsn6c3413b7fe00",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
