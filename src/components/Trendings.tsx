import type { FC } from "react";
import Card from "./cards/Card";
import { useGetTrendingMoviesQuery } from "../features/services/movieApi";
interface TrendingsProps {}

const Trendings: FC<TrendingsProps> = ({}) => {
  const { isLoading, data } = useGetTrendingMoviesQuery();

  return (
    <div className='container mx-auto mb-4'>
      <div className=' flex items-center justify-between px-2'>
        <h1 className='text-2xl font-bold'>Trendings</h1>
        <a href='#' className='text-sm text-zinc-200 hover:text-zinc-50'>
          Browse all
        </a>
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
                  imageClassName="img-cover rounded-lg hover:scale-95 transition-all"
              id={item?.id}
              poster_path={item?.poster_path}
              title={item?.title}
              vote_average={item?.vote_average}
              release_date={item?.release_date?.slice(0, 4)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Trendings;
