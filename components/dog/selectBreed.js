import { useEffect, useRef, useState } from "react";

const SelectBreed = (props) => {
  const [breeds, setBreeds] = useState([]);
  const selectInputRef = useRef(null);

  useEffect(() => {
    const fetchBreed = async () => {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await response.json();

      setBreeds(data);
      return data;
    };
    fetchBreed();
  }, []);

  console.log(breeds);

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredValue = selectInputRef.current.value;

    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?api_key=live_I1rWYTyr4pZeJJwHD35eTfHyTKk9OAEOlGwYp98MdePtEQCYIJcd8d6hOFcXLRF6&page=0&breed_ids=${enteredValue}&limit=10`
    );

    props.onSearchDog(enteredValue);
    props.setCats(response);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full mx-auto flex justify-center my-20 px-[10%]"
    >
      <select
        ref={selectInputRef}
        className="px-6 py-3 w-[30rem] rounded-l-md font-bold text-3xl"
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
        className="p-6 px-3 font-bold text-2xl bg-gray-500 text-white rounded-r-md"
      >
        Submit
      </button>
    </form>
  );
};

export default SelectBreed;
