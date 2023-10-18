import DogItem from "./dog-item";

const DogList = (props) => {
  return (
    <ul className="px-[10%] w-full mx-auto my-8 grid sm:grid-cols-3 grid-cols-1 ">
      {console.log(props)}
      {props?.cats?.map((cat) => (
        <DogItem key={cat.id} cat={cat} />
      ))}
    </ul>
  );
};
export default DogList;
