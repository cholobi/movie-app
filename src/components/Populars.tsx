import type { FC } from "react";
import { useGetPopularMoviesQuery } from "../features/services/movieApi";
import Card from "./cards/Card";
import { Link, NavLink } from "react-router-dom";

interface PopularsProps {}

const Populars: FC<PopularsProps> = ({}) => {
  const { isLoading, data } = useGetPopularMoviesQuery();
  return (
    <div className='container mx-auto mt-4'>
      <div className=' flex items-center justify-between px-2'>
        {data && <h1 className='text-2xl font-bold'>Popular Streams</h1>}
        {/* <a  href="/movies">Browse all</a> */}
      </div>
      {isLoading ? (
        <div className='grid grid-cols-5 animate-pulse mt-6'>
          {[1, 2, 3, 4, 5].map(() => (
            <div className='bg-slate-400 h-52 w-44 rounded-lg'></div>
          ))}
        </div>
      ) : (
        <div className='grid lg:grid-cols-6 grid-cols-2 md:grid-cols-4 gap-3 rounded-lg'>
          {data?.slice(0, 6)?.map((item: any) => (
            <Card
              imageClassName='img-cover rounded-lg hover:scale-95 transition-all'
              vote_average={item?.vote_average}
              id={item?.id}
              poster_path={item?.poster_path}
              title={item?.title}
              release_date={item?.release_date?.slice(0, 4)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Populars;
