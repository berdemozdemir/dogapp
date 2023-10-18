import { useState } from "react";

import SelectBreed from "@/components/dog/selectBreed";
import DogList from "@/components/dog/dog-list";

export default function Home() {
  const [cats, setCats] = useState([]);

  return (
    <>
      <SelectBreed setCats={setCats} />
      <DogList cats={cats} />
    </>
  );
}
