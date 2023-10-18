const { QueryClient } = require("@tanstack/react-query");

export const queryClient = new QueryClient();

// export async function fetchDogs(props) {
//   const response = await fetch(
//     `https://api.thecatapi.com/v1/images/search?page=0&breed_ids=${props.breed}&limit=10`
//   );
//   // "https://api.thedogapi.com/v1/breeds?api_key=live_I1rWYTyr4pZeJJwHD35eTfHyTKk9OAEOlGwYp98MdePtEQCYIJcd8d6hOFcXLRF6&limit=10"
//   // "https://api.thecatapi.com/v1/breeds?api_key=live_I1rWYTyr4pZeJJwHD35eTfHyTKk9OAEOlGwYp98MdePtEQCYIJcd8d6hOFcXLRF6&limit=10"

//   if (!response.ok) {
//     const error = new Error("Something went wront while fetching dogs..");
//     error.code = response.status;
//     error.info = await response.json();
//     throw error;
//   }
//   const data = await response.json();

//   return data;
// }

export async function fetchDogDetail(id) {
  const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);

  if (!response.ok) {
    const error = new Error("Something went wrong while fetching details..");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}
