import Image from "next/image";
import Link from "next/link";

const CatItem = (props) => {
  const { reference_image_id, name, id } = props.cat;

  const url = `https://cdn2.thecatapi.com/images/${reference_image_id}.jpg`;

  return (
    <Link href={`/${reference_image_id}`}>
      <li className="px-[20%] sm:px-4 py-10 sm:p-4 w-auto overflow-hidden bg-white cursor-pointer ">
        <Image
          src={url}
          alt={id}
          className="hover:scale-110 duration-100 w-full h-[250px] object-fill rounded-t-lg"
          height={250}
          width={250}
        />

        <span className="text-2xl text-blue-600">{name}</span>

        <Link
          href={`/${reference_image_id}`}
          className="flex justify-center bg-slate-500 font-bold text-white py-3 text-2xl rounded-b-md"
        >
          View Details
        </Link>
      </li>
    </Link>
  );
};

export default CatItem;
