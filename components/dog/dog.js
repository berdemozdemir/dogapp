import { useQuery } from "@tanstack/react-query";

import DogList from "@/components/dog/dog-list";
import { fetchDogs } from "@/util/https";
import Loading from "@/components/UI/Loading";
import ErrorBlock from "@/components/UI/ErrorBlock";

const Dog = (props) => {
  const { data, isError, error, isPending } = useQuery({
    queryKey: ["dogs"],
    queryFn: fetchDogs,
  });

  // useEffect(() => {
  //   const updatedData = data.map(item=>item.)
  // }, [data, props.searchTerm]);

  console.log(data);

  // if (isPending) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return (
  //     <ErrorBlock
  //       title="Warning!"
  //       message={
  //         error.info?.message || "Something went wrong while fetching data"
  //       }
  //     />
  //   );
  // }
  console.log(props.cats);
  return (
    <>
      <DogList dogs={props.cats} />
    </>
  );
};

export default Dog;
