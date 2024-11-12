import { useEffect, useState, type FC } from "react";
import Recards from "./cards/Recards";
import { getRecommendedMovies } from "../pages/Data";
import { Movie } from "../features/services/movieApi";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
interface RecommandationsProps {}

const Recommandations: FC<RecommandationsProps> = ({}) => {
  const [data, setData] = useState<Movie[]>([]);
  const { isAuthenticated } = useSelector((state:RootState) => state.auth);


  useEffect(() => {
    getRecommendedMovies().map((item) => {
      try {
        axios
          .get(item.url)
          .then((res) => setData(res.data?.results?.slice(0, 3)));
      } catch (error) {
        console.log("error occurred", error);
      }
    });
  }, []);
  return (
    <div className='flex container mx-auto flex-col my-6'>
          <h1 className=" py-4 mb-2">Recommended</h1>
      <div className=' grid lg:grid-cols-3  gap-2'>
        {data?.map((item) => (
          <>
            <Recards
              id={item?.id}
              isauthenticated={isAuthenticated}
              poster_path={item?.poster_path}
              overview={item?.overview}
              title={item?.title}
            />
          </>
        ))}
      </div>
    </div>
  );
};
export default Recommandations;
