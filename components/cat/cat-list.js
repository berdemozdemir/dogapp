import CatItem from "./cat-item";

const CatList = (props) => {
  return (
    <ul className="px-[10%] w-full mx-auto my-8 grid sm:grid-cols-3 grid-cols-1 gap-2">
      {props?.cats?.map((cat) => (
        <CatItem key={cat.id} cat={cat} />
      ))}
    </ul>
  );
};
export default CatList;
