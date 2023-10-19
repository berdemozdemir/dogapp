import { fetchBreeds } from "@/util/https";
import { useEffect, useRef, useState } from "react";

const SelectBreed = (props) => {
  const [breeds, setBreeds] = useState([]);
  const selectInputRef = useRef(null);

  useEffect(() => {
    const fetchBreed = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await response.json();

      setBreeds(data);
      props.setCats(data);

      return data;
    };

    fetchBreed();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredValue = selectInputRef.current.value;

    props.onCatSelected(enteredValue);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto flex justify-center mt-12 px-12"
    >
      <select
        ref={selectInputRef}
        className="py-3 rounded-l-md font-bold text-3xl border pl-3 cursor-pointer"
      >
        <option>Default</option>

        {breeds?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="p-6 px-3 font-bold text-2xl bg-gray-500 text-white rounded-r-md hover:bg-gray-300 hover:text-black"
      >
        Submit
      </button>
    </form>
  );
};

export default SelectBreed;
