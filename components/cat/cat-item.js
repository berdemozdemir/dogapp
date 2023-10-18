import Link from "next/link";

const CatItem = (props) => {
  const { url, id } = props.cat;

  return (
    <li className="px-[20%] sm:px-4 py-10 sm:p-4 w-auto overflow-hidden">
      <img
        src={url}
        alt={id}
        className="w-full h-[250px] object-fill rounded-t-lg"
      />
      <Link
        href={`/${id}`}
        className="flex justify-center bg-slate-500 font-bold text-white py-3 text-2xl rounded-b-md"
      >
        View Details
      </Link>
    </li>
  );
};

export default CatItem;
