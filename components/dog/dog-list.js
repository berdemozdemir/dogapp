import DogItem from "./dog-item";

const DogList = (props) => {
  return (
    <ul className="px-[10%] w-[90rem] mx-auto my-8 grid sm:grid-cols-3 grid-cols-1 ">
      {console.log(props)}
      {props?.cats?.map((dog) => (
        <DogItem key={dog.id} dog={dog} />
      ))}
    </ul>
  );
};
export default DogList;
