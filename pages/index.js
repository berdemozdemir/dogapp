import { useState } from "react";

import SelectBreed from "@/components/cat/selectBreed";
import CatList from "@/components/cat/cat-list";

export default function Home() {
  const [cats, setCats] = useState([]);

  return (
    <>
      <SelectBreed setCats={setCats} />
      <CatList cats={cats} />
    </>
  );
}
