import { useState } from "react";

import SelectBreed from "@/components/cat/selectBreed";
import CatList from "@/components/cat/cat-list";

export default function Home() {
  const [cats, setCats] = useState([]);

  const updateCats = async (breed) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?api_key=live_I1rWYTyr4pZeJJwHD35eTfHyTKk9OAEOlGwYp98MdePtEQCYIJcd8d6hOFcXLRF6&page=0&breed_ids=${breed}&limit=10`
    );

    const data = await response.json();

    const mappedCats = data.map((cat) => {
      return { ...cat.breeds[0], reference_image_id: cat.id };
    });

    setCats(mappedCats);
  };

  return (
    <>
      <SelectBreed setCats={setCats} onCatSelected={updateCats} />
      <CatList cats={cats} />
    </>
  );
}
