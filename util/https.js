const { QueryClient } = require("@tanstack/react-query");

export const queryClient = new QueryClient();

export async function fetchCatDetail(id) {
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
