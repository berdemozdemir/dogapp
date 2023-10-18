import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";

import { fetchDogDetail } from "@/util/https";
import ErrorBlock from "@/components/UI/ErrorBlock";
import Loading from "@/components/UI/Loading";

const DogDetail = () => {
  const router = useRouter();

  const dogDetail = router.query.DogDetail;

  const { data, isPending, error, isError } = useQuery({
    queryKey: ["dogs", dogDetail],
    queryFn: () => fetchDogDetail(dogDetail),
  });

  let content;

  if (isPending) {
    content = <Loading />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Something went wrong"
        message={
          error.info?.message ||
          "Couldn't create a event please try again later"
        }
      />
    );
  }

  if (data && data.breeds && data.breeds[0]) {
    const breed = data.breeds[0];

    content = (
      <div
        className={`w-[60rem] mx-auto my-10 w-[${data?.width}px] rounded-md overflow-hidden`}
      >
        <img src={data.url} alt={breed?.name} />
        <div className="bg-gray-300 flex items-center flex-col p-4 text-2xl">
          <h2 className="text-4xl font-bold">{breed?.name}</h2>
          <p>{breed && breed?.bred_for}</p>
          <p>{breed?.group}</p>
          <p>{breed?.life_span}</p>
          <Link
            href="./"
            className="px-6 py-3 my-4 text-2xl bg-gray-400 rounded border cursor-pointer hover:bg-white"
          >
            Back..
          </Link>
        </div>
      </div>
    );
  }

  return content;
};

export default DogDetail;