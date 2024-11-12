import type { FC } from "react";
import Header from "../components/Header";
import Card from "../components/cards/Card";
import {
  useGetAllMoviesQuery,
  useLazyGetFilterMoviesQuery,
} from "../features/services/movieApi";
import Search from "../components/Search";

interface MoviesProps {}

const Movies: FC<MoviesProps> = ({}) => {
  const response = useGetAllMoviesQuery();
  const [getFilterMovies, { data }] = useLazyGetFilterMoviesQuery();
  console.log(data);

  return (
    <>
      <Header />
      <Search />
      {response.isLoading ? (
        <div className='grid lg:grid-cols-6 animate-pulse mt-6 mb-2 gap-2'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            () => (
              <div className='bg-slate-400 h-52 w-44 rounded-lg'></div>
            )
          )}
        </div>
      ) : (
        <div className=' grid lg:grid-cols-6 grid-cols-3 gap-2 mx-auto container p-2'>
          {response.data?.slice(0, 18).map((item) => (
            <Card
              poster_path={item?.poster_path}
              imageClassName='rounded-lg'
              id={item?.id}
              release_date={item?.release_date?.slice(0, 4)}
              key={item?.id}
              title={item?.title}
              vote_average={item?.vote_average}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Movies;
