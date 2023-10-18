import { useState } from "react";

import Dog from "@/components/dog/dog";
import SelectBreed from "@/components/dog/selectBreed";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(null);
  const [cats, setCats] = useState([]);

  function searchHandler(searchTerm) {
    setSearchTerm(searchTerm);
  }

  return (
    <>
      <SelectBreed onSearchDog={searchHandler} setCats={setCats} />
      <Dog cats={cats} searchTerm={searchTerm} />
    </>
  );
}

// detay sayfasindaki buton yeni istek atiyor
// breed'i olmayan programi cokertiyor
